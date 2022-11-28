import { Lti1p1LaunchRequest, LtiRequest, Of } from '../model/LtiRequest'
import * as React from 'react'
import ReactJson from 'react-json-view'
import { RequestRow } from './RequestRow'
import { RequestDetails } from './request/RequestDetails'
import { json, Parameters } from './request/Parameters'
import { pipe } from 'fp-ts/lib/function'
import { postDataWithout } from './request/requestHelpers'

export const Lti1p1LaunchRequestRow = (props: {
  request: Lti1p1LaunchRequest
  selected: boolean
}) => (
  <RequestRow
    color="blue"
    label="Launch"
    url={props.request.request.request.url}
    time={new Date(props.request.request.startedDateTime)}
    selected={props.selected}
  />
)

export const Lti1p1LaunchDetails = (props: {
  request: Lti1p1LaunchRequest
}) => (
  <RequestDetails request={props.request.request}>
    <Parameters
      parameters={pipe(
        props.request.request.request.postData,
        postDataWithout()
      )}
    />
  </RequestDetails>
)
