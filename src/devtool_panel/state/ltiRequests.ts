import { flow, pipe } from 'fp-ts/function'
import * as IO from 'fp-ts/IO'
import * as O from 'fp-ts/Option'
import * as Str from 'fp-ts/string'
import * as RA from 'fp-ts/ReadonlyArray'
import * as At from '../lib/atom'
import {
  LtiRequest,
  parseLti1p1Request,
  BrowserRequest,
} from '../model/LtiRequest'
import { parsePostLti1p3LaunchRequest } from '../model/parse1p3LaunchRequest'
import { parsePostLti1p3LoginRequest } from '../model/parse1p3LoginRequest'
import { parsePostLti1p3RedirectRequest } from '../model/parse1p3RedirectRequest'

export const ltiRequestsAtom = At.mkSettableAtom<
  O.Option<ReadonlyArray<LtiRequest>>
>(O.none)

export const addRequests =
  (requests: ReadonlyArray<BrowserRequest>) =>
  (sa: typeof ltiRequestsAtom): IO.IO<void> =>
    pipe(
      requests,
      RA.filterMap<BrowserRequest, LtiRequest>((r) => {
        return pipe(
          parsePostLti1p3LaunchRequest(r),
          O.altW(() => parsePostLti1p3LoginRequest(r)),
          O.altW(() => parsePostLti1p3RedirectRequest(r))
        )
      }),
      (reqs) =>
        sa.set(
          flow(
            O.alt<readonly LtiRequest[]>(() => O.some([])),
            O.map(RA.concat(reqs))
          )
        )
    )

export const addRequest = (request: BrowserRequest) => addRequests([request])

export const findRequestType =
  <K extends LtiRequest['_type']>(typ: K) =>
  (
    requests: readonly LtiRequest[]
  ): ReadonlyArray<Extract<LtiRequest, { _type: K }>> =>
    pipe(
      requests,
      RA.filter((r) => r._type === typ)
    ) as any

export const selectLtiLaunches = (requests: ReadonlyArray<LtiRequest>) => {
  const lti1p3Logins = findRequestType('lti1p3Login')(requests)
  const lti1p1Redirects = findRequestType('lti1p3Redirect')(requests)
  const lti1p3Launches = findRequestType('lti1p3Launch')(requests)

  return pipe(
    lti1p3Logins,
    RA.map((login) => {
      const redirect = pipe(
        lti1p1Redirects,
        RA.findFirst(
          (r) =>
            login.lti_message_hint._tag === 'Some' &&
            r.lti_message_hint._tag === 'Some' &&
            login.lti_message_hint.value === r.lti_message_hint.value
        )
      )
      const launch = pipe(
        redirect,

        O.chain((r) =>
          pipe(
            lti1p3Launches,
            RA.findFirst((l) => r.state === l.state)
          )
        )
      )
      return {
        _type: 'lti1p3' as const,
        login,
        redirect,
        launch,
      }
    })
  )
}
