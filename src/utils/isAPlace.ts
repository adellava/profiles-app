import { isAnURL } from './isAnURL';

export const isAPlace = (aLocation: { name: string; url: string }) => {
  if (aLocation.name === 'unknown') return false;
  if (!isAnURL(aLocation.url)) return false;

  return true;
};
