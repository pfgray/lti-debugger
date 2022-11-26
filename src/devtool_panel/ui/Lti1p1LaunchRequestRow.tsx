import { Lti1p1LaunchRequest, LtiRequest, Of } from '../model/LtiRequest'
import * as React from 'react'

export const Lti1p1LaunchRequestRow = (props: {
  request: Lti1p1LaunchRequest
  selected: boolean
}) => <div>1.1 launch request to: {props.request.request.request.url}</div>

export const Lti1p1LaunchDetails = (props: {
  request: Lti1p1LaunchRequest
}) => (
  <div>
    params:
    <pre>
      {props.request.request.request.postData?.params
        ?.map((p) => `${p.name}=${p.value}`)
        .join('\n')}
    </pre>
  </div>
)
