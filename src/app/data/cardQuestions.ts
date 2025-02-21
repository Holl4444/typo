import type { FlipCard } from '../types/cards';

export const typescriptCards: FlipCard[] = [
  {
    id: 1,
    statement:
      'TypeScript makes it harder to manage large code bases...',
    answer: {
      isTrue: false,
      explanation:
        " It helps manage large code bases by clarifying code's intent and leaving clues for team members.",
    },
  },
  {
    id: 2,
    statement: 'TypeScript prevents errors when running code.',
    answer: {
      isTrue: false,
      explanation:
        'TypeScript prevents errors before you run your code but it doesn’t stop errors at runtime.',
    },
  },
  {
    id: 3,
    statement:
      'TypeScript is completely different from JavaScript...',
    answer: {
      isTrue: false,
      explanation:
        'TypeScript is a superset of JavaScript, meaning all JavaScript code is valid TypeScript code.',
    },
  },
  {
    id: 4,
    statement:
      'TypeScript doesn’t help teams, it’s just for you to look at and correct.',
    answer: {
      isTrue: false,
      explanation:
        'Using TypeScript can help team members or other people coming to the code understand more clearly how it works.',
    },
  },
  {
    id: 5,
    statement: 'TypeScript saves time in the long run...',
    answer: {
      isTrue: true,
      explanation:
        'By catching errors early, making code easier to understand and helping people avoid common mistakes.',
    },
  },
  {
    id: 6,
    statement:
      'TypeScript provides you with built in documentation...',
    answer: {
      isTrue: true,
      explanation:
        'You document which types are expected and make your code clear.',
    },
  },
  {
    id: 7,
    statement: 'TypeScript helps prevent your code breaking...',
    answer: {
      isTrue: true,
      explanation:
        'It helps you spot type errors that could break your code, they might be hard to find if not discovered until run time',
    },
  },
  {
    id: 8,
    statement: 'TypeScript catches errors while you write the code.',
    answer: {
      isTrue: true,
      explanation: 'Errors are highlighted in your IDE.',
    },
  },
  {
    id: 9,
    statement: 'TypeScript can prevent all errors in your code...',
    answer: {
      isTrue: false,
      explanation:
        "TypeScript catches type errors early but it doesn't find every error in your code!",
    },
  },
  {
    id: 10,
    statement: 'TypeScript doesn’t give any IDE support...',
    answer: {
      isTrue: false,
      explanation:
        'Red squiggly lines highlight errors and hovering over your code will show types. VSC also updates all references to individual changes made in your code.',
    },
  },
  {
    id: 11,
    statement: 'You need to declare every variable...',
    answer: {
      isTrue: false,
      explanation:
        'You can mostly trust Typescript to infer variables but it’s important to know how before moving on.',
    },
  },
  {
    id: 12,
    statement:
      'You can write JavaScript inside a Typescript file and it will still work...',
    answer: {
      isTrue: true,
      explanation: 'TypeScript allows JavaScript inside .ts files.',
    },
  },
];
