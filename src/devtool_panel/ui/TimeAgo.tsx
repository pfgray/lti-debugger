export const timeAgo = (date: Date) => {
  const msDelta = Date.now() - date.getTime()
  const hourDelta = Math.round(msDelta / 1000 / 60 / 60)
  const minuteDelta = Math.round(msDelta / 1000 / 60)
  if (hourDelta >= 1) {
    return `${hourDelta}h ago`
  } else if (minuteDelta >= 1) {
    return `${minuteDelta}m ago`
  } else {
    return `${Math.round(msDelta / 1000)}s ago`
  }
}
