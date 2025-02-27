import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as E from 'fp-ts/Either'
import * as A from 'fp-ts/Array'
import * as RA from 'fp-ts/ReadonlyArray'
import * as RR from 'fp-ts/ReadonlyRecord'
import { BrowserRequest } from './LtiRequest'

export type NotUndefined<T> = T extends undefined ? never : T

export type Params = NotUndefined<
  NotUndefined<Required<BrowserRequest>['request']['postData']>['params']
>

export const findPostParamE =
  (name: string) =>
  <R extends Record<'params', Params>>(req: R): E.Either<string, string> =>
    pipe(
      req.params,
      A.findFirst((p) => p.name === name),
      E.fromOption(() => `Could not find param ${name}`),
      E.chain((p) =>
        E.fromOption(() => `Param ${name} has no value`)(
          O.fromNullable(p.value)
        )
      )
    )

export const findPostParam =
  (name: string) =>
  <R extends Record<'params', Params>>(req: R): O.Option<string> =>
    pipe(
      req.params,
      A.findFirst((p) => p.name === name),
      O.chain((p) => O.fromNullable(p.value))
    )

export const mkGetOrPostRequestParser =
  <K extends readonly string[], L extends readonly string[]>(paramNames: {
    required: K
    optional: L
  }) =>
  (
    request: BrowserRequest
  ): E.Either<
    string,
    {
      required: Record<K[number], string>
      optional: Record<L[number], O.Option<string>>
    }
  > =>
    pipe(
      E.right(request),
      E.chain(parseGetRequestWithParams(paramNames)),
      O.alt(() => parsePostRequestWithParams(paramNames)(request))
    )

export const parseGetRequestWithParams =
  <K extends readonly string[], L extends readonly string[]>(paramNames: {
    required: K
    optional: L
  }) =>
  (
    request: BrowserRequest
  ): E.Either<
    string,
    {
      required: Record<K[number], string>
      optional: Record<L[number], O.Option<string>>
    }
  > =>
    pipe(
      E.right(request),
      E.bindTo('req'),
      E.filterOrElseW(
        ({ req }) => req.request.method === 'GET',
        () => 'Not a GET request'
      ),
      E.bindW('queryString', ({ req }) =>
        E.fromNullable(`No Query string`)(req.request.queryString)
      ),
      E.chain(({ queryString }) =>
        parseParams(paramNames)(RA.fromArray(queryString))
      )
    )

const parseParams =
  <K extends readonly string[], L extends readonly string[]>(paramNames: {
    required: K
    optional: L
  }) =>
  (
    requestParams: ReadonlyArray<{
      name: string
      value?: string
    }>
  ): E.Either<
    string,
    {
      required: Record<K[number], string>
      optional: Record<L[number], O.Option<string>>
    }
  > =>
    pipe(
      E.right(requestParams),
      E.bindTo('params'),
      E.bindW('required', ({ params }) =>
        pipe(
          paramNames.required,
          E.traverseArray((paramName) =>
            pipe(
              params,
              RA.findFirstMap((p) =>
                pipe(
                  p.value,
                  O.fromNullable,
                  O.filter(() => p.name === paramName),
                  O.map((value) => [paramName, value] as const)
                )
              )
            )
          ),
          O.map(RR.fromEntries),
          O.map((p) => p as Record<K[number], string>)
        )
      ),
      O.let('optional', ({ params }) =>
        pipe(
          paramNames.optional,
          RA.map(
            (paramName) =>
              [
                paramName,
                pipe(
                  params,
                  RA.findFirst((p) => p.name === paramName),
                  O.chainNullableK((p) => p.value)
                ),
              ] as const
          ),
          RR.fromEntries,
          (p) => p as Record<L[number], O.Option<string>>
        )
      )
    )

export const parsePostRequestWithParams =
  <K extends readonly string[], L extends readonly string[]>(paramNames: {
    required: K
    optional: L
  }) =>
  (
    request: BrowserRequest
  ): O.Option<{
    required: Record<K[number], string>
    optional: Record<L[number], O.Option<string>>
  }> =>
    pipe(
      O.some(request),
      O.bindTo('req'),
      O.filter(({ req }) => req.request.method === 'POST'),
      O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
      O.bind('params', ({ postData }) =>
        pipe(postData.params, O.fromNullable, O.map(RA.fromArray))
      ),
      O.chain(({ params }) => parseParams(paramNames)(params))
    )
