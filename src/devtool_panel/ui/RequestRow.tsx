import * as React from 'react'
import { timeAgo } from './timeAgo'

type RequestRowProps = {
  method: string
  url: string
  label: string
  time: Date
  color: 'yellow' | 'green' | 'purple' | 'blue' | 'cyan'
  selected: boolean
}

export const RequestRow = (props: RequestRowProps) => (
  <div
    className={
      'flex flex-auto border-b border-stone-500 w-full' +
      (props.selected ? ' bg-blue-800 text-white' : '')
    }
  >
    <div className="flex flex-auto p-0.5 text-xs w-full">
      <div
        className={
          'min-w-[4rem] text-xs inline-block text-center whitespace-nowrap align-baseline font-bold text-white rounded-full ' +
          (props.color === 'yellow'
            ? 'bg-yellow-500'
            : props.color === 'blue'
            ? 'bg-blue-500'
            : props.color === 'green'
            ? 'bg-green-500'
            : props.color === 'cyan'
            ? 'bg-cyan-500'
            : 'bg-purple-500')
        }
      >
        {props.label}
      </div>
      <div className="ml-2 min-w-[4rem] text-center">{props.method}</div>
      <div className="ml-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {props.url}
      </div>
      <div className="ml-4 min-w-[4rem]">{timeAgo(props.time)}</div>
    </div>
  </div>
)
