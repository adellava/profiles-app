import { useRef } from 'react';
import {
  CharactersListing,
  Button,
  Modal,
  CharacterCompleteProfile,
} from 'src/components';
import { MainLayout } from 'src/layouts';
import styles from './app.module.scss';
import { useCharacters, useCharacterCompleteProfile } from 'src/hooks';

export function App() {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [
    characters,
    isLoadingCharacters,
    errorInGettingTheCharacters,
    fetchCharacters,
    charactersNextPage,
  ] = useCharacters();
  const [
    characterCompleteProfile,
    fetchCharacter,
    errorInGettingTheCompleteProfile,
    loadingTheCompleteProgile,
  ] = useCharacterCompleteProfile();

  const showCompleteProfileModal = async (url: string) => {
    if (!modalRef.current) return;
    modalRef.current.showModal();
    await fetchCharacter(url);
  };

  const closeCompleteProfileModal = () => {
    if (!modalRef.current) return;
    modalRef.current.close();
  };

  return (
    <main className={styles.app}>
      <MainLayout>
        <Modal
          ref={modalRef}
          title="Profile Detail"
          onCloseModal={closeCompleteProfileModal}
        >
          {characterCompleteProfile && !errorInGettingTheCompleteProfile ? (
            <CharacterCompleteProfile
              completeCharacter={characterCompleteProfile}
            />
          ) : null}
          {loadingTheCompleteProgile ? <div>loading ...</div> : null}
          {errorInGettingTheCompleteProfile ? (
            <div>{errorInGettingTheCompleteProfile.message}</div>
          ) : null}
        </Modal>

        <CharactersListing
          characters={characters}
          onCharacterClick={showCompleteProfileModal}
        />

        {isLoadingCharacters ? <div>loading ...</div> : null}
        {errorInGettingTheCharacters ? (
          <div>{errorInGettingTheCharacters.message}</div>
        ) : null}

        {charactersNextPage ? (
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
