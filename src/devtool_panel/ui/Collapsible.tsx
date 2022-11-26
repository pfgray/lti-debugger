import * as React from 'react'
import {
  ArrowSmallRightIcon,
  ArrowSmallDownIcon,
} from '@heroicons/react/24/solid'

type CollapsibleProps = {
  initiallyOpen: boolean
  title: string
  children: React.ReactNode
}

export const Collapsible = (props: CollapsibleProps) => {
  const [open, setOpen] = React.useState(props.initiallyOpen)
  return (
    <div className="flex flex-col">
      <div
        className="bg-gray-200 w-full p-0.5 cursor-pointer text-xs flex flex-row"
        onClick={() => setOpen(!open)}
      >
        <div className="h-full">
          {open ? (
            <ArrowSmallDownIcon className="w-4" />
          ) : (
            <ArrowSmallRightIcon className="w-4" />
          )}
        </div>
        {props.title}
      </div>
      {open ? props.children : null}
    </div>
  )
}
