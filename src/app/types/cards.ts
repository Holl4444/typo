export type FlipCard = {
  id: number;
  statement: string;
  answer: {
    isTrue: boolean;
    explanation: string;
  };
};
