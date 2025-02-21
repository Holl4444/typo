import Image from 'next/image';
import Hero from '../../components/Hero/Hero';
import Header from '../../components/Header/Header';
import styles from './page.module.css';

export default function Basics() {
  return (
    <div className={styles.basicsContent}>
      <Header title="The Basics"/>
      <Hero
        leftArticle={{
          title: 'Basic Types',
          content:
            'TypeScript provides several basic types like number, string, boolean, and more to help you write type-safe code.',
        }}
        rightArticle={{
          title: 'Type Inference',
          content:
            'TypeScript can automatically determine types when you initialize variables, making it easier to get started with type safety.',
        }}
        image={{
          src: '/dinoTyping.svg',
          alt: 'Dinosaur typing on a keyboard',
          width: 200,
          height: 200,
        }}
      />
      {/* Move relevant content here */}
    </div>
  );
}
