import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import * as React from 'react'
import { Lti1p3LoginRequest } from '../model/LtiRequest'
import { json, Parameters } from './request/Parameters'
import { RequestDetails } from './request/RequestDetails'
import { getParamsWithout } from './request/requestHelpers'
import { RequestRow } from './RequestRow'

export const Lti1p3LoginRequestRow = (props: {
  request: Lti1p3LoginRequest
  selected: boolean
}) => (
  <RequestRow
    color="yellow"
    label="Login"
    method={props.request.request.request.method}
    url={props.request.request.request.url}
    time={new Date(props.request.request.startedDateTime)}
    selected={props.selected}
  />
)

export const Lti1p3LoginDetails = (props: { request: Lti1p3LoginRequest }) => (
  <RequestDetails request={props.request.request}>
    <Parameters
      parameters={pipe(
        props.request.request.request,
        getParamsWithout('lti_message_hint'),
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
