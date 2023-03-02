import styles from './Button.module.scss';

type ButtonProps = {
  text: string | React.ReactNode;
} & React.ComponentProps<'button'>;

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button {...props} className={styles.Button}>
      {text}
    </button>
  );
};
