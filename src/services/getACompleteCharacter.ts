import api from 'src/services/api';
import { Character, Location, Episode } from 'src/@types';
import { isAnURL, isALocation } from 'src/utils';

const returnAnEmptyLocation = (): Promise<Location> => {
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

const getACompleteCharacter = async (aCharacterURL: string) => {
  try {
    const aCharacter: Character = await api.get<Character>(aCharacterURL);

    const locationPromises: Promise<Location>[] = [];
    const episodesPromises: Promise<Episode>[] = [];

    locationPromises.push(
      isALocation(aCharacter.origin)
        ? api.get<Location>(aCharacter.origin.url)
        : returnAnEmptyLocation()
    );
    locationPromises.push(
      isALocation(aCharacter.location)
        ? api.get<Location>(aCharacter.location.url)
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
