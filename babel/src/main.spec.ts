import { merge } from './main';

describe('merge', () => {
  it('should merge 2 objects', () => {
    const a = { a: 100 };
    const b = { b: 100 };

    const expected = { a: 100, b: 100 };
    expect(merge(a, b)).toEqual(expected);
  });
});
