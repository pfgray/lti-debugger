import { ReactNode, useState } from 'react'
import * as React from 'react'
import {
  ArrowSmallRightIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid'

type ExpandableProps = {
  header: (isExpanded: boolean) => ReactNode
  initialExpanded?: boolean
  children: ReactNode
}

export const Expandable = (props: ExpandableProps) => {
  const [expanded, setExpanded] = useState(props.initialExpanded || false)
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setExpanded(!expanded)}
        className="flex flex-row cursor-pointer items-center"
      >
        <div className="w-4">
          {expanded ? <ArrowSmallDownIcon /> : <ArrowSmallRightIcon />}
        </div>
        <div className="flex flex-auto">{props.header(expanded)}</div>
      </div>
      {expanded ? <div>{props.children}</div> : null}
    </div>
  )
}
