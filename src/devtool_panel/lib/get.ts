export const get =
  <K extends string>(key: K) =>
  <O extends Record<K, any>>(obj: O): O[K] =>
    obj[key]
