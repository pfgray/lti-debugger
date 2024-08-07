import { Lti1p3LaunchRequest, LtiRequest, Of } from '../model/LtiRequest'
import * as React from 'react'
import ReactJson from 'react-json-view'
import { RequestRow } from './RequestRow'
import { RequestDetails } from './request/RequestDetails'
import { json, Parameters } from './request/Parameters'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { getParamsWithout } from './request/requestHelpers'

export const Lti1p3LaunchRequestRow = (props: {
  request: Lti1p3LaunchRequest
  selected: boolean
}) => (
  <RequestRow
    color="green"
    label="Launch"
    message_type={
      props.request.id_token.payload[
        'https://purl.imsglobal.org/spec/lti/claim/message_type'
      ] as string
    }
    method={props.request.request.request.method}
    url={props.request.request.request.url}
    time={new Date(props.request.request.startedDateTime)}
    selected={props.selected}
  />
)

export const Lti1p3LaunchDetails = (props: {
  request: Lti1p3LaunchRequest
}) => (
  <RequestDetails request={props.request.request}>
    <Parameters
      parameters={pipe(
        props.request.request.request,
        getParamsWithout('id_token'),
        RA.concat([pipe(props.request.id_token.payload, json('id_token'))])
      )}
    />
  </RequestDetails>
)
