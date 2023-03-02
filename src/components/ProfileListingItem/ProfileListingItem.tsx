import { Character } from 'src/@types/Character';

type ProfileListingItemProps = {
  character: Character;
  onCharacterClick: (url: string) => void;
};

export const ProfileListingItem = ({
  character,
  onCharacterClick,
}: ProfileListingItemProps) => {
  return (
    <li key={character.id}>
      {character.name}{' '}
      <button onClick={() => onCharacterClick(character.url)}>
        get complete profile
      </button>
    </li>
  );
};
