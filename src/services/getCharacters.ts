import api from './api';
import { ListCharactersResponse } from 'src/services/models';

const getCharacters = async () => {
  try {
    const result = await api.get<ListCharactersResponse>(
      'https://rickandmortyapi.com/api/character'
    );

    return result;
  } catch {
    return new Error('Characters not found');
  }
};

export default getCharacters;
