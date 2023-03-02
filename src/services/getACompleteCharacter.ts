import api from 'src/services/api';
import {
  CharacterResponse,
  LocationResponse,
  EpisodeResponse,
} from 'src/services/models';

const isAnURL = (aString: string) => {
  const urlRegex = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  );
  return urlRegex.test(aString);
};

const isALocation = (aLocation: { name: string; url: string }) => {
  if (aLocation.name === 'unknown') return false;
  if (!isAnURL(aLocation.url)) return false;

  return true;
};

const returnAnEmptyLocation = (): Promise<LocationResponse> => {
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
    const aCharacter: CharacterResponse = await api.get<CharacterResponse>(
      aCharacterURL
    );

    const locationPromises: Promise<LocationResponse>[] = [];
    const episodesPromises: Promise<EpisodeResponse>[] = [];

    locationPromises.push(
      isALocation(aCharacter.origin)
        ? api.get<LocationResponse>(aCharacter.origin.url)
        : returnAnEmptyLocation()
    );
    locationPromises.push(
      isALocation(aCharacter.location)
        ? api.get<LocationResponse>(aCharacter.location.url)
        : returnAnEmptyLocation()
    );

    aCharacter.episode.forEach((episodeUrl) => {
      if (isAnURL(episodeUrl))
        episodesPromises.push(api.get<EpisodeResponse>(episodeUrl));
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
