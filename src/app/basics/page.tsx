import Image from 'next/image'
import ImageBlock from '../../components/ImageBlock/ImageBlock'
import Feature from '../../components/Feature/Feature';
import Header from '../../components/Header/Header';
import Split from '../../components/Split/Split';
import styles from './page.module.css';

export default function Basics() {
  return (
    <div className={styles.basicsContent}>
      <Header title="The Basics" />
      <Feature
        title="The JS:"
        text="We can see we're getting unexpected behaviour here that isn't flagged: 5 + 10 is definitely not 510! Whats happening is that we're concatenating rather than adding with our '+'  symbol. Integer + string = string."
        image={{
          src: '/dinoRage.svg',
          alt: 'Unhappy dinosaur',
          width: 200,
          height: 200,
          className: styles.flipped,
        }}
        imagePosition="left"
      />
      <Image src="/jsFunc.png" alt="" width={830} height={300} />
      <Feature
        title="The TS:"
        text="By adding types (a: number) your can immediately see both what is expected input and where we have given a string
instead, highlighting the issue while we are writing code, allowing us to bypass the problem and helping anyone working on the
code later to have a better understanding of how to use it."
      />
      <Image src="/tsFunc.png" alt="" width={830} height={300} />
      <Split
        title="Adding type with typescript:"
        sections={[
          {
            text: 'In Js we usually declare variables like this, without specifying the type, which means we may miss errors, like when trying to pass a string into a variable like score, that probably expects a number.',
            image: {
              src: '/jsScore.png',
              alt: 'let score = 100; score = "one hundred", JavaScript code',
              width: 300,
              height: 80,
            },
          },
          {
            text: 'In TypeScript we can be more specific and use this syntax to clarify what the variable"s type will be, here we say this variable will contain a number.',
            image: {
              src: '/tsScore.png',
              alt: 'The same code: let score = 100; score = "one hundred" but in TypeScript. the variable name is undelined with red squiggly lines.',
              width: 300,
              height: 80,
            },
          },
          {
            text: "You can see the red lines warning us about a problem with our variable. If I pan over the variable in Visual Studio Code, it even tells me what's going wrong.",
            image: {
              src: '/ideHover.png',
              alt: 'Custom types demonstration',
              width: 300,
              height: 100,
            },
          },
        ]}
      />
      <Split
        title="Functions need rules too:"
        direction="imageRight"
        sections={[
          {
            text: 'Here we declare our parameter "num" to be of type number (num: number).',
          },
          {
            text: 'We  declare that the return value of the function will be a boolean type.',
          },
          {
            text: 'Entering a string is caught.',
          },
        ]}
        singleImage={{
          src: '/funcTs.png',
          alt: 'Type example illustration',
          width: 400,
          height: 200,
        }}
      />
      <div className={styles.decorationWrapper}>
        <Image
          src="/dinoJoy.svg"
          alt="Happy dinosaur"
          width={200}
          height={200}
          className={styles.sideDecoration}
        />
        <ImageBlock
          title="and Arrays..."
          text="We declare an array whose values are all numbers (number[]). Now only numbers can go into the highScores array."
          image={{
            src: '/array.png',
            alt: 'TypeScript code example showing type checking arrays',
            width: 600,
            height: 200,
          }}
        />
        <ImageBlock
          title="Objects keep their shape:"
          text="In the object 'player', the property 'name' will always be of type string and the property 'score' will always be a number."
          image={{
            src: '/object.png',
            alt: 'TypeScript code example showing type checking an object',
            width: 600,
            height: 200,
          }}
        />
      </div>
    </div>
  );
}
