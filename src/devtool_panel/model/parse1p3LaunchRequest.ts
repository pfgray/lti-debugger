import * as E from 'fp-ts/Either'
import { pipe } from 'fp-ts/function'
import { BrowserRequest, LtiRequest, Of } from './LtiRequest'
import { parseJwtE } from './parseJwt'
import { findPostParamE } from './parseRequestHelpers'

export function parsePostLti1p3LaunchRequest(
  request: BrowserRequest
): E.Either<string, Of<LtiRequest, 'lti1p3Launch'>> {
  return pipe(
    E.right(request),
    E.bindTo('req'),
    (a) => a,
    E.filterOrElseW(
      ({ req }) => req.request.method === 'POST',
      () => 'not a POST request'
    ),
    E.bindW('postData', ({ req }) =>
      E.fromNullable('No postData')(req.request.postData)
    ),
    E.bindW('params', ({ postData }) =>
      E.fromNullable('No params')(postData.params)
    ),
    E.bindW('state', findPostParamE('state')),
    E.bindW('unparsed_id_token', findPostParamE('id_token')),
    E.bindW('id_token', ({ unparsed_id_token }) =>
      parseJwtE(unparsed_id_token)
    ),
    E.map(({ id_token, state, unparsed_id_token }) => {
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
