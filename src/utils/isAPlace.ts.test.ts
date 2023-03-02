import { isAPlace } from './isAPlace';

describe('isAPlace', () => {
  it('should return true for a valid location', () => {
    expect(isAPlace({ name: 'Earth', url: 'https://www.google.com' })).toBe(
      true
    );
  });

  it('should return false for an invalid location', () => {
    expect(isAPlace({ name: 'unknown', url: '' })).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isAPlace({ name: '', url: '' })).toBe(false);
  });
});
