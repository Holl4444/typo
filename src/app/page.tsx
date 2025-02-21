import Image from 'next/image';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';
import ScratchEmbed from '../components/ScratchEmbed/ScratchEmbed';
import Explanation from '../components/Explanation/Explanation';
import Quiz from '../components/Quiz/Quiz';
import FlipCard from '../components/FlipCard/FlipCard';
import { typescriptCards } from '../app/data/cardQuestions';
import { typescriptBasicsQuiz } from '../app/data/quizQuestions';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.homeContent}>
      <Header />
      <Hero
        leftArticle={{
          title: 'What is it?',
          content:
            'TypeScript is a superset of JavaScript, which means it’s JavaScript with extra features...you can write JavaScript inside a TypeScript file and it will still work. The extra you get with TypeScript is more control over the type of your variables.',
        }}
        rightArticle={{
          title: 'Why care?',
          content:
            'Type errors make up around 15% of initial bugs in JavaScript projects according to a recent study by Microsoft Research. These type of errors may seem minor when you are working on small scale projects but can become serious issues, especially in larger projects, where things are harder to keep track of.',
        }}
        image={{
          src: '/dinoPuzzled.svg',
          alt: 'Confused dinosaur',
          width: 200,
          height: 200,
        }}
      />
      <ScratchEmbed
        projectId="1136292733"
        title="Introduction to Types"
        description="A dinosaur finds bugs in his code without TypeScript"
      />
      <Explanation />
      <div className={styles.quizSection}>
        <Quiz
          title="📝 TypeScript Quiz"
          questions={typescriptBasicsQuiz}
          questionsToShow={3}
        />
        <Image
          src="/dinoStudy.svg"
          alt="Dinosaur preparing to study TypeScript"
          width={200}
          height={200}
          className={styles.quizOverlay}
        />
      </div>
      <ScratchEmbed
        projectId="your-second-project-id"
        title="Practice with Types"
        description="Hands-on practice with TypeScript type checking"
      />
      <FlipCard
        title="Test Your TypeScript Knowledge"
        cards={typescriptCards}
      />
      <div className={styles.imageWrapper}>
        <Image
          src="/dinoHappy.svg"
          alt="A happy dinosaur"
          width={200}
          height={200}
      />
      </div>
    </div>
  );
}
