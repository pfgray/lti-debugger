import * as O from 'fp-ts/Option'

export const tap =
  (message: string) =>
  <A>(a: A): A => {
    console.log(message)
    return a
  }

export const tapF =
  <A>(f: (a: A) => unknown) =>
  (a: A): A => {
    f(a)
    return a
  }

export const tapOp =
  <A>(f: (a: A) => unknown) =>
  (a: O.Option<A>): O.Option<A> => {
    if (O.isSome(a)) {
      f(a.value)
    }
    return a
  }

export const tapOpM =
  <A>(message: string) =>
  (a: O.Option<A>): O.Option<A> =>
    tapOp<A>(() => {
      console.log(message)
    })(a)
