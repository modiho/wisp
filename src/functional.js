export const prop = R.prop;
export const propEquals = R.propEq;
export const notNil = (v) => !R.isNil(v);
export const curry = R.curry;
export const get = curry((sequence, key) => sequence.get(key.toString()));