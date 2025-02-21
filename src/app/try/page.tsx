import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Try() {
  return (
    <div className={styles.finalContent}>
      <h1 className={styles.mainTitle}>TypeScript</h1>

      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>You Made It!</h2>

        <div className={styles.textContainer}>
          <p>
            {`You've learned about TypeScript's core concepts: basic
            types, functions with type safety, arrays with type
            checking, and objects with defined shapes. These
            fundamentals will help you write more reliable code and
            catch errors before they become problems. Remember,
            TypeScript is a powerful tool that grows with you. Start
            small by adding types to your JavaScript code gradually,
            and you'll discover more features as you need them.`}
          </p>
        </div>
        <h2 className={styles.sectionTitle}>Getting Started</h2>
        <div className={styles.textContainer}>
          <p>
            If you are less confident working with the console on your
            computer, or want to keep it super simple, try using a
            typescript sandbox like the one here:
          </p>
          <Link
            href=" https://www.typescriptlang.org/play/"
            className={styles.ctaLink}
          >
            Ready to Practice?
          </Link>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.setupWrapper}>
            <div>
              <p>Simplest way to get set up using the console:</p>
              <pre className={styles.codeSteps}>
                {`1. Create a new folder and navigate into it:
   mkdir typescript-playground && cd typescript-playground

2. Install TypeScript and tsx:
   npm install typescript --save-dev
   npm install -g tsx

3. Create a file with the file extension '.ts':
   myTypescript.ts

4. Try adding the following code:
   let message: string = "Hello, TypeScript!";
   message = 42; // ❌ This should show a red squiggly error in VS Code
   console.log(message);

5. Run the TypeScript file instantly with tsx:
   tsx yourFileNameHere.ts`}
              </pre>
            </div>
            <Image
              src="/dinoJoy.svg"
              alt="Happy dinosaur"
              width={200}
              height={200}
              className={styles.setupDino}
            />
          </div>
        </div>
      </section>
      <section className={styles.contentSection}>
        <h2 className={styles.sectionTitle}>
          Want to See How This Page Works?
        </h2>
        <div className={styles.textContainer}>
          <p>
            {`Hey there, future coder! Did you know you can peek behind
            the scenes of this webpage? It's like having X-ray vision
            for websites! Here's how:`}
          </p>
          <pre className={styles.codeSteps}>
            {`1. Right-click anywhere on this page
2. Click 'Inspect' (or press F12 on your keyboard)
3. Look for files ending in .tsx - that's TypeScript!
4. Can you spot how we made the dinosaurs appear? 🦖`}
          </pre>
          <p>
            All the cool animations, dinosaurs, and interactive parts
            you see here were made with TypeScript. Try finding the
            code that makes the cards flip!
          </p>
        </div>
      </section>
    </div>
  );
}
