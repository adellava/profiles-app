import { useState } from 'react';
import { CompleteCharacter } from 'src/@types/Character';
import { CharactersListing, Header } from 'src/components';

import useCharacters from 'src/hooks/useCharacters';
import getACompleteCharacter from 'src/services/getACompleteCharacter';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

export function App() {
  const [characters, isLoading, error, fetchCharacters, nextPage] =
    useCharacters();

  const [selectedCharacter, setSelectedCharacter] =
    useState<CompleteCharacter | null>(null);
  const getCompleteProfile = async (url: string) => {
    const res = await getACompleteCharacter(url);

    if (res instanceof Error) {
      console.log(res.message);
      return;
    }

    console.log(res);

    setSelectedCharacter(res);
  };

  return (
    <div>
      <Header />
      <div>
        {selectedCharacter ? (
          <article>
            <div>{selectedCharacter.character.name}</div>
            <div>{selectedCharacter.location.name}</div>
            <div>{selectedCharacter.origin.name}</div>
            <div>numero di episodi: {selectedCharacter.episodes.length}</div>
          </article>
        ) : null}
      </div>
      {isLoading ? <div>loading ...</div> : null}
      <CharactersListing
        characters={characters}
        onCharacterClick={getCompleteProfile}
      />

      {error ? <div>{error.message}</div> : null}

      {nextPage ? (
        <button onClick={fetchCharacters}>next page</button>
      ) : (
        <div>no more pages</div>
      )}
    </div>
  );
}

export default App;
