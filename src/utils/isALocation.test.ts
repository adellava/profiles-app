import { isALocation } from './isALocation';

describe('isALocation', () => {
  it('should return true for a valid location', () => {
    expect(isALocation({ name: 'Earth', url: 'https://www.google.com' })).toBe(
      true
    );
  });

  it('should return false for an invalid location', () => {
    expect(isALocation({ name: 'unknown', url: '' })).toBe(false);
  });

  it('should return false for an empty string', () => {
    expect(isALocation({ name: '', url: '' })).toBe(false);
  });
});
