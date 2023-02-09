import { flow, pipe } from 'fp-ts/lib/function'
import * as React from 'react'
import * as RA from 'fp-ts/ReadonlyArray'
import * as At from '../lib/atom'
import * as O from 'fp-ts/Option'
import { useAtom } from '../lib/useAtom'
import { ltiRequestsAtom } from '../state/ltiRequests'
import { ViewWithDetails } from './ViewWithDetails'
import { match } from 'ts-adt'
import {
  Lti1p1LaunchRequestRow,
  Lti1p1LaunchDetails,
} from './Lti1p1LaunchRequestRow'
import {
  Lti1p3LoginDetails,
  Lti1p3LoginRequestRow,
} from './Lti1p3LoginRequestRow'
import {
  Lti1p3RedirectDetails,
  Lti1p3RedirectRequestRow,
} from './Lti1p3RedirectRequestRow'
import {
  Lti1p3LaunchDetails,
  Lti1p3LaunchRequestRow,
} from './Lti1p3LaunchRequestRow'
import {
  Lti1p3DeepLinkingResponseDetails,
  Lti1p3DeepLinkingResponseRow,
} from './Lti1p3DeepLinkingResponseRow'

type LtiLaunchTableProps = {}

const selectedRequestIndexAtom = At.mkSettableAtom<O.Option<number>>(O.none)

const checkIsSelected = (
  idx: number,
  selectedIndex: O.Option<number>
): boolean =>
  pipe(
    selectedIndex,
    O.fold(
      () => false,
      (n) => n === idx
    )
  )

const launchesWithSelectedStatusAtom = pipe(
  ltiRequestsAtom,
  At.ap2(selectedRequestIndexAtom),
  At.map(([selectedRequestIndex, requests]) =>
    pipe(
      requests,
      O.map(
        RA.mapWithIndex(
          (idx, request) =>
            [request, checkIsSelected(idx, selectedRequestIndex)] as const
        )
      )
    )
  )
)

export const LtiLaunchTable = (props: LtiLaunchTableProps) => {
  const requestsWithSelected = useAtom(launchesWithSelectedStatusAtom)
  return (
    <ViewWithDetails
      main={() =>
        pipe(
          requestsWithSelected,
          O.fold(
            () => <>initializing</>,
            flow(
              RA.map(([request, selected]) =>
                pipe(
                  request,
                  match({
                    lti1p1: (r) => (
                      <Lti1p1LaunchRequestRow request={r} selected={selected} />
                    ),
                    lti1p3Login: (r) => (
                      <Lti1p3LoginRequestRow request={r} selected={selected} />
                    ),
                    lti1p3Redirect: (r) => (
                      <Lti1p3RedirectRequestRow
                        request={r}
                        selected={selected}
                      />
                    ),
                    lti1p3Launch: (r) => (
                      <Lti1p3LaunchRequestRow request={r} selected={selected} />
                    ),
                    lti1p3DeepLinkingResponse: (r) => (
                      <Lti1p3DeepLinkingResponseRow
                        request={r}
                        selected={selected}
                      />
                    ),
                  })
                )
              ),
              RA.mapWithIndex((i, el) => (
                <div
                  key={i}
                  className="flex flex-row cursor-pointer"
                  onClick={selectedRequestIndexAtom.set(() => O.some(i))}
                >
                  {el}
                </div>
              )),
              (els) => <>{els}</>
            )
          )
        )
      }
      drawer={pipe(
        requestsWithSelected,
        O.chain(
          RA.findFirstMap(([request, selected]) =>
            selected ? O.some(request) : O.none
          )
        ),
        O.map(
          match({
            lti1p1: (r) => <Lti1p1LaunchDetails request={r} />,
            lti1p3Launch: (r) => <Lti1p3LaunchDetails request={r} />,
            lti1p3Login: (r) => <Lti1p3LoginDetails request={r} />,
            lti1p3Redirect: (r) => <Lti1p3RedirectDetails request={r} />,
            lti1p3DeepLinkingResponse: (r) => (
              <Lti1p3DeepLinkingResponseDetails request={r} />
            ),
          })
        )
      )}
      onClose={selectedRequestIndexAtom.set(() => O.none)}
    />
  )
}
