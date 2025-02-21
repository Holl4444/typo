import styles from './Header.module.css';

type HeaderProps = {
  title?: string;
};

export default function Header({
  title = 'TypeScript',
}: HeaderProps) {
  return (
    <div className={styles.h1Wrap}>
      <h1>{title}</h1>
    </div>
  );
}
