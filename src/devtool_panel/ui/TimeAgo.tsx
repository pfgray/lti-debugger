import * as React from 'react'

export const TimeAgo = (props: { date: Date }) => {
  const msDelta = Date.now() - props.date.getTime()
  const hourDelta = Math.round(msDelta / 1000 / 60 / 60)
  const minuteDelta = Math.round(msDelta / 1000 / 60)
  if (hourDelta >= 1) {
    return <span>{hourDelta}h ago</span>
  } else if (minuteDelta >= 1) {
    return <span>{minuteDelta}m ago</span>
  } else {
    return <span>{Math.round(msDelta / 1000)}s ago</span>
  }
}
