import { Character } from 'src/@types/Character';
import { CharactersListingItem } from 'src/components/CharactersListingItem/CharactersListingItem';

type CharactersListingProps = {
  characters: Character[];
  onCharacterClick: (url: string) => void;
};

export const CharactersListing = ({
  characters,
  onCharacterClick,
}: CharactersListingProps) => {
  return (
    <section>
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
