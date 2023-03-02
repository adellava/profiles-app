import { CompleteCharacter, Place } from 'src/@types';
import { isAPlace } from 'src/utils';
import styles from './CharacterCompleteProfile.module.scss';

type CharacterCompleteProfileProps = {
  completeCharacter: CompleteCharacter;
};

const CharacterCompleteProfilePlace = ({
  place,
  title,
}: {
  place: Place;
  title: string;
}) => {
  return (
    <>
      <h4>{title}</h4>
      <div>{place.name}</div>
      {isAPlace(place) ? (
        <>
          <div>{place.type}</div>
          <div>{place.dimension}</div>
          <div>N residents: {place.residents.length}</div>
        </>
      ) : null}
    </>
  );
};

export const CharacterCompleteProfile = ({
  completeCharacter,
}: CharacterCompleteProfileProps) => {
  console.log(completeCharacter);

  return (
    <div className={styles.CharacterCompleteProfile}>
      <img
        className={styles.CharacterCompleteProfile_img}
        src={completeCharacter.character.image}
        alt={completeCharacter.character.name}
      ></img>
      <div className={styles.CharacterCompleteProfile_description}>
        <div
          className={`${styles.CharacterCompleteProfile_info} ${styles.CharacterCompleteProfile_box}`}
        >
          <h3>{completeCharacter.character.name}</h3>
          <div>
            <span>{completeCharacter.character.species}</span> -{' '}
            <span>{completeCharacter.character.status}</span> -{' '}
            <span>{completeCharacter.character.gender}</span>
          </div>
        </div>
        <div
          className={`${styles.CharacterCompleteProfile_origin} ${styles.CharacterCompleteProfile_box}`}
        >
          <CharacterCompleteProfilePlace
            title="Origin"
            place={completeCharacter.origin}
          />
        </div>
        <div
          className={`${styles.CharacterCompleteProfile_location} ${styles.CharacterCompleteProfile_box}`}
        >
          <CharacterCompleteProfilePlace
            title="Location"
            place={completeCharacter.location}
          />
        </div>
        <div
          className={`${styles.CharacterCompleteProfile_episodes} ${styles.CharacterCompleteProfile_box}`}
        >
          <h4>Episodes</h4>
          {completeCharacter.episodes.map((episode, i) => (
            <span key={episode.id}>
              {i !== 0 ? ', ' : null}
              {episode.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
