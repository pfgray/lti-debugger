import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as IO from 'fp-ts/IO'
import { get } from '../lib/get'
import { Lti1p3RedirectRequest, LtiRequest, Of } from './LtiRequest'
import jwt_decode from 'jwt-decode'
import { BrowserRequest } from './LtiRequest'
import { findPostParam } from './parseRequestHelpers'
import { parseJwt } from './parseJwt'

export function parsePostLti1p3RedirectRequest(
  request: BrowserRequest
): O.Option<Lti1p3RedirectRequest> {
  return pipe(
    O.some(request),
    O.bindTo('req'),
    O.filter(({ req }) => req.request.method === 'POST'),
    O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
    O.bind('params', ({ postData }) => O.fromNullable(postData.params)),
    O.bind('login_hint', findPostParam('login_hint')),
    O.bind('state', findPostParam('state')),
    O.bind('nonce', findPostParam('nonce')),
    O.let('unparsed_lti_message_hint', findPostParam('lti_message_hint')),
    O.let('lti_message_hint', ({ unparsed_lti_message_hint }) =>
      pipe(unparsed_lti_message_hint, O.chain(parseJwt))
    ),
    O.let('client_id', findPostParam('client_id')),
    O.map(({ login_hint, nonce, lti_message_hint, client_id, state }) => {
      console.log('found redirectL: ', request.pageref)
      return {
        _type: 'lti1p3Redirect',
        request: request,
        login_hint,
        client_id,
        nonce,
        state,
        lti_message_hint,
      }
    })
  )
}
