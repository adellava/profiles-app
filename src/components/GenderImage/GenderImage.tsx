import { Gender } from 'src/@types';
import styles from './GenderImage.module.scss';

type GenderProps = {
  genderType: Gender;
};

export const GenderImage = ({ genderType }: GenderProps) => {
  if (genderType === 'Male')
    return (
      <span role={'img'} aria-label="Male" className={styles.GenderImage}>
        ♂
      </span>
    );
  if (genderType === 'Female')
    return (
      <span role={'img'} aria-label="Female" className={styles.GenderImage}>
        ♀
      </span>
    );

  return (
    <span role={'img'} aria-label="Unknown" className={styles.GenderImage}>
      ?
    </span>
  );
};
