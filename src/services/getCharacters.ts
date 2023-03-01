import api from './api';

type CharacterResponse = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
};

type GetCharactersResponse = {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: CharacterResponse[];
};

const getCharacters = async () => {
  try {
    const result = await api.get<GetCharactersResponse>(
      'https://rickandmortyapi.com/api/character'
    );

    return result;
  } catch {
    return new Error('Characters not found');
  }
};

export default getCharacters;
