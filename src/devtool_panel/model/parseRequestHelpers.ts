import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import { BrowserRequest } from './LtiRequest'

export type NotUndefined<T> = T extends undefined ? never : T

export type Params = NotUndefined<
  NotUndefined<Required<BrowserRequest>['request']['postData']>['params']
>

export const findPostParam =
  (name: string) =>
  <R extends Record<'params', Params>>(req: R): O.Option<string> =>
    pipe(
      req.params,
      A.findFirst((p) => p.name === name),
      O.chain((p) => O.fromNullable(p.value))
    )
