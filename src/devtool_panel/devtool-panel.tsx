import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as RA from 'fp-ts/ReadonlyArray'
import * as At from './lib/atom'
import * as ReactDOM from 'react-dom'
import * as React from 'react'
import { addRequest, addRequests, ltiRequestsAtom } from './state/ltiRequests'
import { LtiLaunchTable } from './ui/LtiLaunchTable'
import { harfile } from './test-har'

declare const RELEASE: boolean

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
  if (RELEASE === true) {
    chrome.devtools.network.getHAR((harLog) => {
      pipe(ltiRequestsAtom, addRequests(harLog.entries))()
    })
    chrome.devtools.network.onRequestFinished.addListener((request) => {
      pipe(ltiRequestsAtom, addRequest(request))()
    })
  } else {
    setTimeout(() => {
      import('./test-har').then((harFile) => {
        pipe(ltiRequestsAtom, addRequests(harfile.entries))()
      })
    }, 1)
  }
}

init()

ReactDOM.render(<LtiLaunchTable />, document.getElementById('main'))
