import { useEffect, useState } from 'react';
import { Character, CompleteCharacter } from 'src/@types/Character';
import { ProfileListing, Header } from 'src/components';
import getCharacters from 'src/services/getCharacters';
import getACompleteCharacter from 'src/services/getACompleteCharacter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CompleteCharacter | null>(null);

  const fetchCharacters = async () => {
    const res = await getCharacters();

    if (res instanceof Error) {
      console.log(res.message);
      return;
    }

    setCharacters(res.results);
  };

  const getCompleteProfile = async (url: string) => {
    const res = await getACompleteCharacter(url);

    if (res instanceof Error) {
      console.log(res.message);
      return;
    }

    console.log(res);

    setSelectedCharacter(res);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {selectedCharacter && (
          <article>
            <div>{selectedCharacter.character.name}</div>
            <div>{selectedCharacter.location.name}</div>
            <div>{selectedCharacter.origin.name}</div>
            <div>numero di episodi: {selectedCharacter.episodes.length}</div>
          </article>
        )}
      </div>
      <ProfileListing
        characters={characters}
        onCharacterClick={getCompleteProfile}
      />
    </div>
  );
}

export default App;
