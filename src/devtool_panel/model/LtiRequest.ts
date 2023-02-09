import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as IO from 'fp-ts/IO'
import { get } from '../lib/get'
import { Jwt } from './parseJwt'

/**
 * A single LTI-related browser request
 */
export type LtiRequest = ADT<{
  lti1p1: {
    request: BrowserRequest
  }
  lti1p3DeepLinkingResponse: {
    request: BrowserRequest
    jwt: Jwt
  }
  lti1p3Login: {
    request: BrowserRequest
    iss: string
    login_hint: string
    target_link_uri: string
    lti_message_hint: O.Option<Jwt>
    lti_deployment_id: O.Option<string>
    client_id: O.Option<string>
  }
  lti1p3Redirect: {
    request: BrowserRequest
    login_hint: string
    nonce: string
    state: string
    client_id: O.Option<string>
    lti_message_hint: O.Option<Jwt>
  }
  lti1p3Launch: {
    request: BrowserRequest
    state: string
    id_token: Jwt
  }
}>

export type Of<
  ADT extends Record<'_type', string>,
  K extends ADT['_type']
> = Extract<ADT, { _type: K }>

export type Lti1p1LaunchRequest = Of<LtiRequest, 'lti1p1'>
export type Lti1p3LoginRequest = Of<LtiRequest, 'lti1p3Login'>
export type Lti1p3RedirectRequest = Of<LtiRequest, 'lti1p3Redirect'>
export type Lti1p3LaunchRequest = Of<LtiRequest, 'lti1p3Launch'>
export type Lti1p3DeepLinkingResponse = Of<
  LtiRequest,
  'lti1p3DeepLinkingResponse'
>

type NotUndefined<T> = T extends undefined ? never : T
export type BrowserRequest = chrome.devtools.network.HARLog['entries'][number]
export type BrowserParam = NotUndefined<
  NotUndefined<BrowserRequest['request']['postData']>['params']
>[number]

export function parseLti1p1Request(
  request: BrowserRequest
): O.Option<Of<LtiRequest, 'lti1p1'>> {
  // must be a POST
  return pipe(
    O.some(request),
    O.bindTo('req'),
    O.filter(({ req }) => req.request.method === 'POST'),
    O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
    O.bind('params', ({ postData }) => O.fromNullable(postData.params)),
    O.bind(
      'version',
      flow(
        get('params'),
        A.findFirst((p) => p.name === 'lti_version')
      )
    ),
    O.map(get('req')),
    O.map((request) => ({
      _type: 'lti1p1',
      request,
    }))
  )
}
