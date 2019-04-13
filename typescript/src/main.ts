export function merge(a: object, b: object) {
  return { ...a, ...b };
}

export function add100(a: number) {
  const b: number = '100';
  return a + b;
}
