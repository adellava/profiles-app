import { Character } from 'src/@types/Character';
import { GenderImage, StatusImage } from 'src/components';
import styles from './CharactersListingItem.module.scss';

type CharactersListingItemProps = {
  character: Character;
  onCharacterClick: (url: string) => void;
};

export const CharactersListingItem = ({
  character,
  onCharacterClick,
}: CharactersListingItemProps) => {
  return (
    <article
      key={character.id}
      className={styles.CharactersListingItem}
      onClick={() => onCharacterClick(character.url)}
    >
      <img
        src={character.image}
        alt={character.name}
        className={styles.CharactersListingItem_img}
      />
      <div className={styles.CharactersListingItem_description}>
        <section>
          <div>
            <h3 className={styles.CharactersListingItem_title}>
              <button className={styles.CharactersListingItem_buttonTitle}>
                {character.name}
              </button>
            </h3>
          </div>
          <div className={styles.CharactersListingItem_subtitle1}>
            {character.species} - <StatusImage statusType={character.status} />
            {character.status}
          </div>
          <div className={styles.CharactersListingItem_subtitle2}>
            <GenderImage genderType={character.gender} />
            {character.gender}
          </div>
        </section>

        <section>
          <div className={styles.CharactersListingItem_meta}>Location</div>
          <div>{character.location.name}</div>
        </section>

        <section>
          <div className={styles.CharactersListingItem_meta}>Origin</div>
          <div>{character.origin.name}</div>
        </section>

        <section>
          <div className={styles.CharactersListingItem_meta}>
            Number of Episodes
          </div>
          <div>{character.episode.length}</div>
        </section>
      </div>
    </article>
  );
};
