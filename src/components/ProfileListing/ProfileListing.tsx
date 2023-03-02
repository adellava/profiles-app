import { Character } from 'src/@types/Character';
import { ProfileListingItem } from 'src/components/ProfileListingItem/ProfileListingItem';

type ProfileListingProps = {
  characters: Character[];
  onCharacterClick: (url: string) => void;
};

export const ProfileListing = ({
  characters,
  onCharacterClick,
}: ProfileListingProps) => {
  return (
    <section>
      {characters.map((character) => (
        <ProfileListingItem
          key={character.id}
          character={character}
          onCharacterClick={onCharacterClick}
        />
      ))}
    </section>
  );
};
