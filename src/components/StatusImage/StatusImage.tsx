import { Status } from 'src/@types';
import styles from './StatusImage.module.scss';

type StatusImageProps = {
  statusType: Status;
};

export const StatusImage = ({ statusType }: StatusImageProps) => {
  if (statusType === 'Alive')
    return (
      <span role={'img'} aria-label="Alive" className={styles.StatusImage}>
        🟢
      </span>
    );
  if (statusType === 'Dead')
    return (
      <span role={'img'} aria-label="Dead" className={styles.StatusImage}>
        🔴
      </span>
    );

  return (
    <span role={'img'} aria-label="Unknown" className={styles.StatusImage}>
      ?
    </span>
  );
};
