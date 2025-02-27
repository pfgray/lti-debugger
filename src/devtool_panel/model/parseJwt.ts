import * as E from 'fp-ts/Either'
import * as O from 'fp-ts/Option'
import { pipe } from 'fp-ts/function'

export type Jwt = {
  header: object
  payload: Record<string, any>
}

const isObject = (x: unknown): x is Record<string, any> =>
  typeof x === 'object' && x !== null

const parse = E.tryCatchK(
  (s: string) => {
    return JSON.parse(s) as unknown
  },
  (e) => `Could not parse JSON: ${e}`
)

const decode = E.tryCatchK(
  (base64Url: string) => {
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
  },
  (e) => `Could not decode base64: ${e}`
)

const parsePart =
  (index: 0 | 1 | 2) =>
  <R extends Record<'parts', string[]>>(obj: R) =>
    pipe(
      O.fromNullable(obj.parts[index]),
      O.chainEitherK(decode),
      O.chainEitherK(parse),
      O.filter(isObject)
    )

const parsePartE =
  (index: 0 | 1 | 2) =>
  <R extends Record<'parts', string[]>>(obj: R) =>
    pipe(
      E.fromNullable(`JWT part ${index} did not exist`)(obj.parts[index]),
      E.chain(decode),
      E.chain(parse),
      E.filterOrElseW(isObject, () => `JWT part ${index} was not an object`)
    )

export const parseJwtE = (s: string): E.Either<string, Jwt> => {
  return pipe(
    E.right(s.split('.')),
    E.bindTo('parts'),
    E.bindW('header', parsePartE(0)),
    E.bindW('payload', parsePartE(1)),
    E.map(({ header, payload }) => ({
      header,
      payload,
    }))
  )
}

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
