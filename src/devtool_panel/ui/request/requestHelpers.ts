import { pipe } from 'fp-ts/lib/function'
import { BrowserParam, BrowserRequest } from '../../model/LtiRequest'
import { ParamFormat, str } from './Parameters'
import * as RA from 'fp-ts/ReadonlyArray'
import * as O from 'fp-ts/Option'
import { eqString } from 'fp-ts/lib/Eq'

export const without =
  (...keys: ReadonlyArray<string>) =>
  (params: ReadonlyArray<BrowserParam>): ReadonlyArray<ParamFormat> =>
    pipe(
      params,
      RA.filter((p) => !pipe(keys, RA.elem(eqString)(p.name))),
      RA.map((p) => str(p.name)(p.value || ''))
    )

export const postDataWithout =
  (...keys: ReadonlyArray<string>) =>
  (
    postData: BrowserRequest['request']['postData']
  ): ReadonlyArray<ParamFormat> =>
    pipe(
      postData,
      O.fromNullable,
      O.chainNullableK((a) => a.params),
      O.map(without(...keys)),
      O.getOrElseW(() => [])
    )
