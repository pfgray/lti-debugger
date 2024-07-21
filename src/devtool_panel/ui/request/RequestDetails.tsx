import * as React from 'react'
import { BrowserRequest } from '../../model/LtiRequest'
import { Collapsible } from '../Collapsible'

type RequestDetailsProps = {
  request: BrowserRequest
  children: React.ReactNode
}

export const RequestDetails = (props: RequestDetailsProps) => (
  <div className="flex flex-col">
    <div className="p-0.5 text-xs">URL: {props.request.request.url}</div>
    <Collapsible title="Request Headers" initiallyOpen={false}>
      <div className="p-1">
        {props.request.request.headers.map((h) => (
          <div className="text-xs" key={h.name}>
            <span className="font-bold mr-1">{h.name}:</span>
            <span>{h.value}</span>
          </div>
        ))}
      </div>
    </Collapsible>
    <Collapsible title="Response Headers" initiallyOpen={false}>
      <div className="p-1">
        {props.request.response.headers.map((h) => (
          <div className="text-xs" key={h.name}>
            <span className="font-bold mr-1">{h.name}:</span>
            <span>{h.value}</span>
          </div>
        ))}
      </div>
    </Collapsible>
    <Collapsible title="Request" initiallyOpen={true}>
      {props.children}
    </Collapsible>
  </div>
)
