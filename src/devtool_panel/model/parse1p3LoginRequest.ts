import * as A from 'fp-ts/Array'
import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import jwt_decode from 'jwt-decode'
import { BrowserParam, BrowserRequest, LtiRequest, Of } from './LtiRequest'
import { parseJwt } from './parseJwt'
import { mkGetOrPostRequestParser } from './parseRequestHelpers'

const isObject = (x: unknown): x is object =>
  typeof x === 'object' && x !== null

const findPostParam =
  (name: string) =>
  <R extends Record<'params', BrowserParam[]>>(req: R): O.Option<string> =>
    pipe(
      req.params,
      A.findFirst((p) => p.name === name),
      O.chain((p) => O.fromNullable(p.value))
    )

export const parseLti1p3LoginRequest = (
  request: BrowserRequest
): O.Option<Of<LtiRequest, 'lti1p3Login'>> =>
  pipe(
    request,
    mkGetOrPostRequestParser({
      required: ['iss', 'login_hint', 'target_link_uri'] as const,
      optional: ['lti_message_hint', 'lti_deployment_id', 'client_id'] as const,
    }),
    (p) => p,
    O.map(
      ({
        required: { iss, login_hint, target_link_uri },
        optional: { lti_message_hint, lti_deployment_id, client_id },
      }) => ({
        _type: 'lti1p3Login',
        request,
        iss,
        login_hint,
        target_link_uri,
        lti_message_hint: pipe(lti_message_hint, O.chain(parseJwt)),
        lti_deployment_id,
        client_id,
      })
    )
  )

export function parsePostLti1p3LoginRequest(
  request: BrowserRequest
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
