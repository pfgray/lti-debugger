import { Lti1p3RedirectRequest, LtiRequest, Of } from '../model/LtiRequest'
import * as React from 'react'
import { RequestRow } from './RequestRow'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { pipe } from 'fp-ts/lib/function'
import { RequestDetails } from './request/RequestDetails'
import { json, Parameters } from './request/Parameters'
import { postDataWithout } from './request/requestHelpers'

export const Lti1p3RedirectRequestRow = (props: {
  request: Lti1p3RedirectRequest
  selected: boolean
}) => (
  <RequestRow
    color="purple"
    label="Redirect"
    method={props.request.request.request.method}
    url={props.request.request.request.url}
    time={new Date(props.request.request.startedDateTime)}
    selected={props.selected}
  />
)

export const Lti1p3RedirectDetails = (props: {
  request: Lti1p3RedirectRequest
}) => (
  <RequestDetails request={props.request.request}>
    <Parameters
      parameters={pipe(
        props.request.request.request.postData,
        postDataWithout('lti_message_hint'),
        RA.concat(
          pipe(
            props.request.lti_message_hint,
            O.map((jwt) => jwt.payload),
            O.map(json('lti_message_hint')),
            RA.fromOption
          )
        )
      )}
    />
  </RequestDetails>
)

// <div>redirect request back to: {props.request.request._url}</div>
