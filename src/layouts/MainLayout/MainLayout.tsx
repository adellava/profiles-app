import { Header } from 'src/components';
import styles from './MainLayout.module.scss';

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.MainLayout}>
      <div className={styles.MainLayout_header}>
        <Header />
      </div>
      <div className={styles.MainLayout_content}>{children}</div>
    </div>
  );
};
