import {
  Lti1p3DeepLinkingResponse,
  Lti1p3LaunchRequest,
  LtiRequest,
  Of,
} from '../model/LtiRequest'
import * as React from 'react'
import ReactJson from 'react-json-view'
import { RequestRow } from './RequestRow'
import { RequestDetails } from './request/RequestDetails'
import { json, Parameters } from './request/Parameters'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { getParamsWithout } from './request/requestHelpers'

export const Lti1p3DeepLinkingResponseRow = (props: {
  request: Lti1p3DeepLinkingResponse
  selected: boolean
}) => (
  <RequestRow
    color="cyan"
    label="DeepLink"
    method={props.request.request.request.method}
    url={props.request.request.request.url}
    time={new Date(props.request.request.startedDateTime)}
    selected={props.selected}
  />
)

export const Lti1p3DeepLinkingResponseDetails = (props: {
  request: Lti1p3DeepLinkingResponse
}) => (
  <RequestDetails request={props.request.request}>
    <Parameters
      parameters={pipe(
        props.request.request.request,
        getParamsWithout('JWT'),
        RA.concat([pipe(props.request.jwt.payload, json('JWT'))])
      )}
    />
  </RequestDetails>
)
