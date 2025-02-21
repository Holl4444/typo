export type QuizQuestion = {
  id: number;
  question: string;
  options: {
    label: string;
    text: string;
  }[];
  correctAnswer: string;
};

export type QuizProps = {
  questions: QuizQuestion[];
  title: string;
  questionsToShow?: number;
};
