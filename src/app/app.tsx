import { useState } from 'react';
import { CompleteCharacter } from 'src/@types/Character';
import { CharactersListing, Button } from 'src/components';
import { MainLayout } from 'src/layouts';

import useCharacters from 'src/hooks/useCharacters';
import getACompleteCharacter from 'src/services/getACompleteCharacter';

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

    setSelectedCharacter(res);
  };

  return (
    <main className={styles.app}>
      <MainLayout>
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
          <div style={{ margin: '2rem auto' }}>
            <Button onClick={fetchCharacters} text={'Next Page'} />
          </div>
        ) : (
          <div>no more pages</div>
        )}
      </MainLayout>
    </main>
  );
}

export default App;
