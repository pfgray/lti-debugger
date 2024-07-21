import { ADT } from 'ts-adt'
import { flow, pipe } from 'fp-ts/function'
import * as O from 'fp-ts/Option'
import * as A from 'fp-ts/Array'
import * as IO from 'fp-ts/IO'
import { get } from '../lib/get'
import { LtiRequest, Of } from './LtiRequest'
import jwt_decode from 'jwt-decode'
import { tapOp, tapOpM } from '../lib/tap'

export type Jwt = {
  header: object
  payload: Record<string, any>
}

const isObject = (x: unknown): x is Record<string, any> =>
  typeof x === 'object' && x !== null

const parse = O.tryCatchK((s: string) => {
  return JSON.parse(s) as unknown
})

const decode = O.tryCatchK((base64Url: string) => {
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
      })
      .join('')
  )

  return jsonPayload
})

const parsePart =
  (index: 0 | 1 | 2) =>
  <R extends Record<'parts', string[]>>(obj: R) =>
    pipe(
      O.fromNullable(obj.parts[index]),
      O.chain(decode),
      O.chain(parse),
      O.filter(isObject)
    )

export const parseJwt = (s: string): O.Option<Jwt> => {
  return pipe(
    O.some(s.split('.')),
    O.bindTo('parts'),
    O.bind('header', parsePart(0)),
    O.bind('payload', parsePart(1)),
    O.map(({ header, payload }) => ({
      header,
      payload,
    }))
  )
}
