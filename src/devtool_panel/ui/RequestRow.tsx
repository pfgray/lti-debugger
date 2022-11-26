import * as React from 'react'
import { TimeAgo } from './TimeAgo'

type RequestRowProps = {
  url: string
  label: string
  time: Date
  color: 'yellow' | 'green' | 'purple' | 'blue'
  selected: boolean
}

export const RequestRow = (props: RequestRowProps) => (
  <div
    className={
      'flex flex-auto border-b border-stone-500' +
      (props.selected ? ' bg-blue-800 text-white' : '')
    }
  >
    <div className="flex flex-auto p-0.5 text-xs">
      <span
        className={
          'w-16 text-xs inline-block text-center whitespace-nowrap align-baseline font-bold text-white rounded-full ' +
          (props.color === 'yellow'
            ? 'bg-yellow-500'
            : props.color === 'blue'
            ? 'bg-blue-500'
            : props.color === 'green'
            ? 'bg-green-500'
            : 'bg-purple-500')
        }
      >
        {props.label}
      </span>
      <div className="flex justify-between flex-auto ml-2">
        <div className="whitespace-nowrap text-ellipsis">{props.url}</div>
        <div className="ml-4 whitespace-nowrap text-ellipsis">
          <TimeAgo date={props.time}></TimeAgo>
        </div>
      </div>
    </div>
  </div>
)
