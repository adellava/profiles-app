import { useState } from 'react';
import getACompleteCharacter from 'src/services/getACompleteCharacter';
import { CompleteCharacter } from 'src/@types/Character';

type useCharactersReturn = [
  CompleteCharacter | null,
  (url: string) => void,
  Error | null,
  boolean
];

const useCharacterCompleteProfile = (): useCharactersReturn => {
  const [selectedCharacter, setSelectedCharacter] =
    useState<CompleteCharacter | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCharacterCompleteProfile = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setSelectedCharacter(null);

    const res = await getACompleteCharacter(url);

    if (res instanceof Error) {
      console.log(res.message);
      setError(new Error('Error in fetching character'));
      setIsLoading(false);
      return;
    }

    setSelectedCharacter(res);
    setIsLoading(false);
  };

  return [selectedCharacter, getCharacterCompleteProfile, error, isLoading];
};

export default useCharacterCompleteProfile;
