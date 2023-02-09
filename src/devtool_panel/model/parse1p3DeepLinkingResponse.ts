import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { LtiRequest, Of } from './LtiRequest'
import { BrowserRequest } from './LtiRequest'
import { findPostParam } from './parseRequestHelpers'
import { parseJwt } from './parseJwt'

export function parsePostLti1p3DeepLinkingResponse(
  request: BrowserRequest
): O.Option<Of<LtiRequest, 'lti1p3DeepLinkingResponse'>> {
  return pipe(
    O.some(request),
    O.bindTo('req'),
    O.filter(({ req }) => req.request.method === 'POST'),
    O.bind('postData', ({ req }) => O.fromNullable(req.request.postData)),
    O.bind('params', ({ postData }) => O.fromNullable(postData.params)),
    O.bind('unparsed_jwt', findPostParam('JWT')),
    O.bind('jwt', ({ unparsed_jwt }) => parseJwt(unparsed_jwt)),
    O.map(({ jwt }) => {
      return {
        _type: 'lti1p3DeepLinkingResponse',
        request,
        jwt,
      }
    })
  )
}
