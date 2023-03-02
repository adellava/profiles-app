import { Character } from 'src/@types/Character';
import { CharactersListingItem } from 'src/components/CharactersListingItem/CharactersListingItem';
import styles from './CharactersListing.module.scss';

type CharactersListingProps = {
  characters: Character[];
  onCharacterClick: (url: string) => void;
};

export const CharactersListing = ({
  characters,
  onCharacterClick,
}: CharactersListingProps) => {
  return (
    <section className={styles.CharactersListing}>
      {characters.map((character) => (
        <CharactersListingItem
          key={character.id}
          character={character}
          onCharacterClick={onCharacterClick}
        />
      ))}
    </section>
  );
};
