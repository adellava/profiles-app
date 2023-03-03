import api from 'src/services/api';
import { Character, Place, Episode } from 'src/@types';
import { isAnURL, isAPlace } from 'src/utils';

const returnAnEmptyLocation = (): Promise<Place> => {
  return new Promise((resolve) => {
    resolve({
      name: 'unknown',
      url: '',
      type: '',
      dimension: '',
      created: '',
      id: 0,
      residents: [],
    });
  });
};

export const getACompleteCharacter = async (aCharacterURL: string) => {
  try {
    const aCharacter: Character = await api.get<Character>(aCharacterURL);

    const locationPromises: Promise<Place>[] = [];
    const episodesPromises: Promise<Episode>[] = [];

    locationPromises.push(
      isAPlace(aCharacter.origin)
        ? api.get<Place>(aCharacter.origin.url)
        : returnAnEmptyLocation()
    );
    locationPromises.push(
      isAPlace(aCharacter.location)
        ? api.get<Place>(aCharacter.location.url)
        : returnAnEmptyLocation()
    );

    aCharacter.episode.forEach((episodeUrl) => {
      if (isAnURL(episodeUrl))
        episodesPromises.push(api.get<Episode>(episodeUrl));
    });

    const [origin, location] = await Promise.all(locationPromises);
    const episodes = await Promise.all(episodesPromises);

    return {
      character: aCharacter,
      origin,
      location,
      episodes,
    };
  } catch {
    return new Error('Character not found');
  }
};

export default getACompleteCharacter;
