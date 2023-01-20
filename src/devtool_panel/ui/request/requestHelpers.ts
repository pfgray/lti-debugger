import { pipe } from 'fp-ts/lib/function'
import { BrowserParam, BrowserRequest } from '../../model/LtiRequest'
import { str } from './Parameters'
import * as RA from 'fp-ts/ReadonlyArray'
import * as O from 'fp-ts/Option'
import * as Str from 'fp-ts/string'
import { ADT } from 'ts-adt'

type Param = {
  name: string
  value?: string
}

export type ParamFormat = ADT<{
  json: { name: string; value: object }
  str: { name: string; value: string }
}>

export const without =
  (...keys: ReadonlyArray<string>) =>
  (params: ReadonlyArray<Param>): ReadonlyArray<ParamFormat> =>
    pipe(
      params,
      RA.filter((p) => !pipe(keys, RA.elem(Str.Eq)(p.name))),
      RA.map((p) => str(p.name)(p.value || ''))
    )

export const getParamsWithout =
  (...keys: ReadonlyArray<string>) =>
  (request: BrowserRequest['request']): ReadonlyArray<ParamFormat> =>
    pipe(request, getParams, without(...keys))

export const getParams = (
  request: BrowserRequest['request']
): ReadonlyArray<Param> => {
  switch (request.method) {
    case 'GET':
      return RA.fromArray(request.queryString)
    case 'POST':
      return RA.fromArray(request.postData?.params || [])
    default:
      return []
  }
}
