import { isAnURL } from './isAnURL';

describe('isAnURL', () => {
  it('should return true for a valid URL', () => {
    expect(isAnURL('https://www.google.com')).toBe(true);
  });

  it('should return false for an invalid URL', () => {
    expect(isAnURL('google')).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAnURL('')).toBe(false);
  });
});
