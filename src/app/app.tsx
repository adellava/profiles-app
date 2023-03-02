import { useEffect, useState } from 'react';
import { Character, CharacterHistory } from 'src/@types/Character';
import getCharacters from 'src/services/getCharacters';
import getACompleteCharacter from 'src/services/getACompleteCharacter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [selectedCharacter, setSelectedCharacter] =
    useState<CharacterHistory | null>(null);

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

    setSelectedCharacter(res);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      Profiles App
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
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name}{' '}
            <button onClick={() => getCompleteProfile(character.url)}>
              get complete profile
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
