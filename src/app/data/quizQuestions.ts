import type { QuizQuestion } from '../types/quiz';

export const typescriptBasicsQuiz: QuizQuestion[] = [
  {
    id: 1,
    question: 'What is TypeScript?',
    options: [
      { label: 'A', text: 'A database language' },
      { label: 'B', text: 'A version of Python' },
      {
        label: 'C',
        text: 'A programming language that adds types to JavaScript',
      },
      { label: 'D', text: 'A tool for styling websites' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 2,
    question:
      'What does it mean that TypeScript is a superset of JavaScript?',
    options: [
      { label: 'A', text: 'TypeScript replaces JavaScript' },
      {
        label: 'B',
        text: 'TypeScript is JavaScript with extra features',
      },
      {
        label: 'C',
        text: 'JavaScript is a part of TypeScript, but they are not related',
      },
      { label: 'D', text: 'TypeScript only works for big projects' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 3,
    question:
      'According to Microsoft Research, what percentage of initial JavaScript bugs are type errors?',
    options: [
      { label: 'A', text: '5%' },
      {
        label: 'B',
        text: '10%',
      },
      {
        label: 'C',
        text: '15%',
      },
      { label: 'D', text: '25%' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 4,
    question:
      'Why are type errors more of a problem in large projects?',
    options: [
      {
        label: 'A',
        text: 'They are harder to spot in bigger codebases',
      },
      {
        label: 'B',
        text: 'They make the code run slower',
      },
      {
        label: 'C',
        text: 'JavaScript can’t be used in large projects',
      },
      { label: 'D', text: 'They crash the computer' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 5,
    question:
      'What does it mean that JavaScript is a "dynamically typed" language?',
    options: [
      {
        label: 'A',
        text: 'Variables must always have a fixed type',
      },
      {
        label: 'B',
        text: 'The type of a variable is decided when you write the code',
      },
      {
        label: 'C',
        text: 'The type of a variable is determined at runtime',
      },
      { label: 'D', text: 'JavaScript doesn’t use types at all' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 6,
    question:
      'What advantage does TypeScript provide over JavaScript?',
    options: [
      {
        label: 'A',
        text: 'It makes websites load faster',
      },
      {
        label: 'B',
        text: 'It prevents common type errors before running the code',
      },
      {
        label: 'C',
        text: 'It replaces JavaScript entirely',
      },
      {
        label: 'D',
        text: 'It forces you to use only numbers and strings',
      },
    ],
    correctAnswer: 'B',
  },
];
