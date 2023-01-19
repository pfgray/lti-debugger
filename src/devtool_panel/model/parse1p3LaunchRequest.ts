import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { LtiRequest, Of } from './LtiRequest'
import { BrowserRequest } from './LtiRequest'
import { findPostParam } from './parseRequestHelpers'
import { parseJwt } from './parseJwt'

export function parsePostLti1p3LaunchRequest(
  request: BrowserRequest
): O.Option<Of<LtiRequest, 'lti1p3Launch'>> {
  return pipe(
    O.some(request),
    O.bindTo('req'),
    O.filter(({ req }) => req.request.method === 'POST'),
    O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
    O.bind('params', ({ postData }) => O.fromNullable(postData.params)),
    O.bind('state', findPostParam('state')),
    O.bind('unparsed_id_token', findPostParam('id_token')),
    O.bind('id_token', ({ unparsed_id_token }) => parseJwt(unparsed_id_token)),
    O.map(({ id_token, state, unparsed_id_token }) => {
      return {
        _type: 'lti1p3Launch',
        unparsed_id_token,
        request,
        state,
        id_token,
      }
    })
  )
}
