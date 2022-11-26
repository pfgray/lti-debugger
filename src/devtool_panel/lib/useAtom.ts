import * as React from 'react'
import * as At from './atom'

export const useAtom = <A>(a: At.Atom<A>): A => {
  const [state, setState] = React.useState(a.currentValue)
  React.useEffect(() => {
    console.log('got setting up atom')
    return a.observe((next, prev) => {
      console.log('got wuut', next, prev)
      if (prev !== next) {
        setState(next)
      }
    })
  }, [a])
  return state
}
