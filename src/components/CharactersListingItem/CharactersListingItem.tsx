import { Character } from 'src/@types/Character';

type CharactersListingItemProps = {
  character: Character;
  onCharacterClick: (url: string) => void;
};

export const CharactersListingItem = ({
  character,
  onCharacterClick,
}: CharactersListingItemProps) => {
  return (
    <article key={character.id}>
      <img src={character.image} alt={character.name} />
      <div>
        <section>
          <div>
            {character.name}{' '}
            <button onClick={() => onCharacterClick(character.url)}>
              open
            </button>
          </div>
          <div>
            {character.species} - {character.status}
          </div>
          <div>{character.gender}</div>
        </section>

        <section>
          <div>Location</div>
          <div>{character.location.name}</div>
        </section>

        <section>
          <div>Origin</div>
          <div>{character.origin.name}</div>
        </section>

        <section>
          <div>Episodes</div>
          <div>{character.episode.length}</div>
        </section>
      </div>
    </article>
  );
};
