import { sum } from './sum';

describe('sum', () => {
  it('returns 0 when there are no numbers', () => {
    expect(sum([])).toEqual(0);
  });

  it('returns the correct sum when there are numbers', () => {
    expect(sum([1, 2, 3])).toEqual(6);
  });

  it('returns the correct sum, ignoring null & undefined values', () => {
    expect(sum([1, null, 2, undefined, 3])).toEqual(6);
  });
});
