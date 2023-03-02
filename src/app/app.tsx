import { useState, useRef } from 'react';
import { CompleteCharacter } from 'src/@types/Character';
import { CharactersListing, Button, Modal } from 'src/components';
import { MainLayout } from 'src/layouts';

import useCharacters from 'src/hooks/useCharacters';
import getACompleteCharacter from 'src/services/getACompleteCharacter';

import styles from './app.module.scss';

export function App() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const [characters, isLoading, error, fetchCharacters, nextPage] =
    useCharacters();

  const [selectedCharacter, setSelectedCharacter] =
    useState<CompleteCharacter | null>(null);
  const getCompleteProfile = async (url: string) => {
    if (modalRef.current) modalRef.current.showModal();
    const res = await getACompleteCharacter(url);

    if (res instanceof Error) {
      console.log(res.message);
      return;
    }

    setSelectedCharacter(res);
  };

  const handleCloseModal = () => {
    if (!modalRef.current) return;

    modalRef.current.close();
    setSelectedCharacter(null);
  };

  return (
    <main className={styles.app}>
      <MainLayout>
        <Modal
          ref={modalRef}
          title={`Profile ${
            selectedCharacter ? selectedCharacter.character.name : ''
          }`}
          onCloseModal={handleCloseModal}
        >
          {selectedCharacter ? (
            <div>
              <div>{selectedCharacter.character.name}</div>
              <div>{selectedCharacter.location.name}</div>
              <div>{selectedCharacter.origin.name}</div>
              <div>numero di episodi: {selectedCharacter.episodes.length}</div>
            </div>
          ) : (
            <div>loading ...</div>
          )}
        </Modal>

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
