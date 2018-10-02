import { isEven } from './isEven';

describe('isEven', () => {
  it('returns true when a number is even', () => {
    expect(isEven(2)).toBeTruthy();
  });

  it('returns false when a number is not even', () => {
    expect(isEven(111)).toBeFalsy();
  });
});
