import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { BrowserRequest, LtiRequest, Of } from './LtiRequest'
import { parseJwt } from './parseJwt'
import { mkGetOrPostRequestParser } from './parseRequestHelpers'

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
