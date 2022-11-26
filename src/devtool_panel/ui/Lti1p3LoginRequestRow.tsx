import {
  BrowserParam,
  BrowserRequest,
  Lti1p3LoginRequest,
} from '../model/LtiRequest'
import * as React from 'react'
import { RequestRow } from './RequestRow'
import ReactJson from 'react-json-view'
import { pipe } from 'fp-ts/lib/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import { RequestDetails } from './request/RequestDetails'
import { eqString } from 'fp-ts/lib/Eq'
import { json, Parameters, ParamFormat, str } from './request/Parameters'
import { postDataWithout } from './request/requestHelpers'

export const Lti1p3LoginRequestRow = (props: {
  request: Lti1p3LoginRequest
  selected: boolean
}) => (
  <RequestRow
    color="yellow"
    label="Login"
    url={props.request.request.request.url}
    time={new Date(props.request.request.time)}
    selected={props.selected}
  />
)

export const Lti1p3LoginDetails = (props: { request: Lti1p3LoginRequest }) => (
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
