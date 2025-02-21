import styles from './Explanation.module.css';

export default function Explanation() {
  return (
    <section className={styles.explanation}>
      <h2>How Does TypeScript Help JavaScript?</h2>
      <p>
        JavaScript is great. It's one of several languages called
        Dynamically typed programming languages. Basically this means
        the data type of a variable is decided at runtime based on
        what the computer can figure out from looking at its value.
        This does leave the door open to some common errors though,
        and that's where TypeScript steps in.
      </p>
    </section>
  );
}
