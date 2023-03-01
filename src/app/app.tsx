import { useEffect, useState } from 'react';
import Character from 'src/@types/Character';
import getCharacters from 'src/services/getCharacters';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const [characters, setCharacters] = useState<Character[]>([]);

  const fetchCharacters = async () => {
    const res = await getCharacters();

    if (res instanceof Error) {
      console.log(res.message);
      return;
    }

    setCharacters(res.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      Profiles App
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <a href={character.url} target="_blank" rel="noreferrer">
              {character.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
