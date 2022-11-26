import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as IO from 'fp-ts/IO'
import { get } from '../lib/get'
import { LtiRequest, Of } from './LtiRequest'
import jwt_decode from 'jwt-decode'
import { parseJwt } from './parseJwt'

type Request = chrome.devtools.network.HARLog['entries'][number]

type NotUndefined<T> = T extends undefined ? never : T

type Params = NotUndefined<
  NotUndefined<Required<Request>['request']['postData']>['params']
>

const isObject = (x: unknown): x is object =>
  typeof x === 'object' && x !== null

const findPostParam =
  (name: string) =>
  <R extends Record<'params', Params>>(req: R): O.Option<string> =>
    pipe(
      req.params,
      A.findFirst((p) => p.name === name),
      O.chain((p) => O.fromNullable(p.value))
    )

const add =
  <K extends string>(key: K) =>
  <R extends {}, Z>(f: (r: R) => Z) =>
  (r: R): R & Record<K, Z> => {
    return {
      ...r,
      [key]: f(r),
    } as any
  }

export const tap =
  (message: string) =>
  <A>(a: A): A => {
    console.log(message)
    return a
  }

export const tapF =
  <A>(f: (a: A) => unknown) =>
  (a: A): A => {
    f(a)
    return a
  }

const tapOp =
  <A>(f: (a: A) => unknown) =>
  (a: O.Option<A>): O.Option<A> => {
    if (O.isSome(a)) {
      f(a.value)
    }
    return a
  }

const tapOpM =
  <A>(message: string) =>
  (a: O.Option<A>): O.Option<A> =>
    tapOp<A>(() => {
      console.log(message)
    })(a)

export function parsePostLti1p3LoginRequest(
  request: Request
): O.Option<Of<LtiRequest, 'lti1p3Login'>> {
  return pipe(
    O.some(request),
    O.bindTo('req'),
    O.filter(({ req }) => req.request.method === 'POST'),
    O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
    O.bind('params', ({ postData }) => O.fromNullable(postData.params)),
    O.bind('iss', findPostParam('iss')),
    O.bind('login_hint', findPostParam('login_hint')),
    O.bind('target_link_uri', findPostParam('target_link_uri')),
    O.let('unparsed_lti_message_hint', findPostParam('lti_message_hint')),
    O.let('lti_message_hint', ({ unparsed_lti_message_hint }) =>
      pipe(unparsed_lti_message_hint, O.chain(parseJwt))
    ),
    O.let('lti_deployment_id', findPostParam('lti_deployment_id')),
    O.let('client_id', findPostParam('client_id')),
    O.map(
      ({
        iss,
        login_hint,
        target_link_uri,
        lti_message_hint,
        lti_deployment_id,
        client_id,
      }) => {
        console.log('found login: ', request.pageref)
        return {
          _type: 'lti1p3Login',
          request: request,
          iss,
          login_hint,
          target_link_uri,
          lti_message_hint,
          lti_deployment_id,
          client_id,
        }
      }
    )
  )
}

const decodeJwt = O.tryCatchK((a: string) => jwt_decode<object>(a))

const parse = O.tryCatchK((s: string) => JSON.parse(s) as unknown)
const decode = O.tryCatchK(atob)

const parsePart =
  (index: 0 | 1 | 2) =>
  <R extends Record<'parts', string[]>>(obj: R) =>
    pipe(
      O.fromNullable(obj.parts[index]),
      O.chain(decode),
      O.chain(parse),
      O.filter(isObject)
    )

const parseIdToken = (s: string) =>
  pipe(
    O.some(s.split('.')),
    O.bindTo('parts'),
    O.bind('header', parsePart(0)),
    O.bind('payload', parsePart(1)),
    O.map(({ header, payload }) => ({
      header,
      payload,
    }))
  )
