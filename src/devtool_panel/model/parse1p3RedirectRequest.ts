import { pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import { BrowserRequest, Lti1p3RedirectRequest } from './LtiRequest'
import { parseJwt } from './parseJwt'
import { mkGetOrPostRequestParser } from './parseRequestHelpers'

export const parsePostLti1p3RedirectRequest = (
  request: BrowserRequest
): O.Option<Lti1p3RedirectRequest> =>
  pipe(
    request,
    mkGetOrPostRequestParser({
      required: ['login_hint', 'state', 'nonce'] as const,
      optional: ['lti_message_hint', 'client_id'] as const,
    }),
    O.map(
      ({
        required: { login_hint, state, nonce },
        optional: { lti_message_hint, client_id },
      }) => ({
        _type: 'lti1p3Redirect',
        request,
        state,
        nonce,
        login_hint,
        lti_message_hint: pipe(lti_message_hint, O.chain(parseJwt)),
        client_id,
      })
    )
  )
