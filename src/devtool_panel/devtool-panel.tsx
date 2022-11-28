import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import * as At from './lib/atom'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { addRequest, addRequests, ltiRequestsAtom } from './state/ltiRequests'
import { harfile } from './test-har'
import { LtiLaunchTable } from './ui/LtiLaunchTable'

type ParsedOption<T extends O.Option<any>> = T extends O.Some<infer U>
  ? U
  : never
type ParsedArray<F extends ReadonlyArray<(a: any) => O.Option<any>>> = {
  [K in keyof F]: ReadonlyArray<ParsedOption<ReturnType<F[K]>>>
}

const parseArray =
  <A, F extends ReadonlyArray<(a: A) => O.Option<any>>>(...fs: F) =>
  (as: ReadonlyArray<A>): ParsedArray<F> =>
    pipe(
      fs,
      RA.map((f) => RA.filterMap(f)(as))
    ) as any

function init() {
  // console.log('adding requests:', harfile.entries)
  // pipe(ltiRequestsAtom, addRequests(harfile.entries))()

  chrome.devtools.network.getHAR((harLog) => {
    pipe(ltiRequestsAtom, addRequests(harLog.entries))()
  })
  chrome.devtools.network.onRequestFinished.addListener((request) => {
    pipe(ltiRequestsAtom, addRequest(request))()
  })
}

init()

ReactDOM.render(<LtiLaunchTable />, document.getElementById('main'))
