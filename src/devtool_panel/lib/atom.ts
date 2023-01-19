import { init } from 'fp-ts/lib/ReadonlyNonEmptyArray'
import * as IO from 'fp-ts/IO'
import { pipe } from 'fp-ts/lib/function'

export type Atom<T> = {
  currentValue: T
  observe: (f: (newValue: T, prevValue: T) => void) => () => void
}

export const ap =
  <A, B>(fab: Atom<(a: A) => B>) =>
  (fa: Atom<A>): Atom<B> => {
    const atom: Atom<B> = {
      currentValue: fab.currentValue(fa.currentValue),
      observe: (g) => {
        const killFab = fab.observe((next, prev) => {
          const prevValue = atom.currentValue
          atom.currentValue = next(fa.currentValue)
          g(atom.currentValue, prevValue)
        })
        const killFa = fa.observe((next, prev) => {
          const prevValue = atom.currentValue
          atom.currentValue = fab.currentValue(next)
          g(atom.currentValue, prevValue)
        })
        return () => {
          killFa()
          killFab()
        }
      },
    }
    return atom
  }

export const ap2 =
  <A>(fa: Atom<A>) =>
  <B>(fb: Atom<B>): Atom<[A, B]> =>
    pipe(
      fa,
      ap(
        pipe(
          fb,
          map((b) => (a: A) => [a, b])
        )
      )
    )

export const of = <A>(a: A): Atom<A> => {
  return {
    currentValue: a,
    observe: () => {
      return () => {}
    },
  }
}

export const map =
  <A, B>(ab: (a: A) => B) =>
  (fa: Atom<A>): Atom<B> => {
    const atom: Atom<B> = {
      currentValue: ab(fa.currentValue),
      observe: (f) => {
        return fa.observe((next, prev) => {
          const prevValue = atom.currentValue
          atom.currentValue = ab(next)
          f(atom.currentValue, prevValue)
        })
      },
    }
    return atom
  }

export type SettableAtom<T> = Atom<T> & {
  set: (f: (t: T) => T) => IO.IO<void>
}

export const mkSettableAtom = <T>(initial: T): SettableAtom<T> => {
  let observers: Array<(newValue: T, prevValue: T) => void> = []
  const atom: SettableAtom<T> = {
    currentValue: initial,
    observe: (f) => {
      observers.push(f)
      return () => {
        observers = observers.filter((f_) => f !== f_)
      }
    },
    set: (f) => () => {
      const prevValue = atom.currentValue
      atom.currentValue = f(atom.currentValue)
      observers.forEach((f) => f(atom.currentValue, prevValue))
    },
  }
  return atom
}
