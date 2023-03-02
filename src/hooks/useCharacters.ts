import { useEffect, useState } from 'react';
import getCharacters from 'src/services/getCharacters';
import { Character } from 'src/@types/Character';

type useCharactersReturn = [
  Character[],
  boolean,
  Error | null,
  () => void,
  string | undefined
];

const INITIAL_PAGE_TO_FETCH = 'https://rickandmortyapi.com/api/character';

const useCharacters = (): useCharactersReturn => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [nextPageToFetch, setNextPageToFetch] = useState<string | undefined>(
    INITIAL_PAGE_TO_FETCH
  );

  const fetchCharacters = async () => {
    if (!nextPageToFetch) {
      return;
    }

    setIsLoading(true);
    const res = await getCharacters(nextPageToFetch);

    if (res instanceof Error) {
      setError(new Error('Error in fetching characters'));
      setIsLoading(false);
      return;
    }

    const newCharactersList = [...characters, ...res.results];
    setNextPageToFetch(res.info.next);
    setCharacters(newCharactersList);
    setError(null);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCharacters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [characters, isLoading, error, fetchCharacters, nextPageToFetch];
};

export default useCharacters;
