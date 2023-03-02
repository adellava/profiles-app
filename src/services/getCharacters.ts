import api from './api';
import { Character } from 'src/@types';

type CharactersListResponse = {
  info: {
    count: number;
    pages: number;
    next?: string;
    prev?: string;
  };
  results: Character[];
};

const getCharacters = async () => {
  try {
    const result = await api.get<CharactersListResponse>(
      'https://rickandmortyapi.com/api/character'
    );

    return result;
  } catch {
    return new Error('Characters not found');
  }
};

export default getCharacters;
