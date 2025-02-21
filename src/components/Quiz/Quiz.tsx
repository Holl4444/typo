'use client';

import { useState, useMemo, useEffect } from 'react';
import styles from './Quiz.module.css';
import type { QuizProps } from '../../app/types/quiz';

export default function Quiz({
  questions,
  title,
  questionsToShow = 3,
}: QuizProps) {
  // State declarations at the top
  const [mounted, setMounted] = useState(false);
  const [renderKey, setRenderKey] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>(
    {}
  );
  const [showResults, setShowResults] = useState(false);

  // Event handlers after state
  const handleAnswerChange = (questionId: number, answer: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Effects after handlers
  useEffect(() => {
    setMounted(true);
  }, []);

  // Memoized values after effects
  const selectedQuestions = useMemo(() => {
    if (!mounted) {
      return questions.slice(0, questionsToShow);
    }

    const indices = Array.from(
      { length: questions.length },
      (_, i) => i
    );
    const shuffledIndices = indices.sort(() => Math.random() - 0.5);

    return shuffledIndices
      .slice(0, questionsToShow)
      .map((index) => questions[index]);
  }, [questions, questionsToShow, mounted]);

  // Render after all hooks
  return (
    <section
      key={renderKey}
      className={styles.quiz}
      aria-labelledby="quiz-title"
    >
      <h2 id="quiz-title">{title}</h2>
      <form className={styles.quizForm}>
        {selectedQuestions.map((q) => (
          <div key={q.id} className={styles.question}>
            <p id={`question-${q.id}`}>{q.question}</p>
            <select
              aria-labelledby={`question-${q.id}`}
              value={answers[q.id] || ''}
              onChange={(e) =>
                handleAnswerChange(q.id, e.target.value)
              }
              className={styles.select}
            >
              <option value="">Choose an answer...</option>
              {q.options.map((option) => (
                <option key={option.label} value={option.label}>
                  {option.label} {option.text}
                </option>
              ))}
            </select>
            {showResults && (
              <p className={styles.feedback}>
                {answers[q.id] === q.correctAnswer
                  ? '✅ Correct!'
                  : '❌ Try again!'}
              </p>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={() => setShowResults(true)}
          className={styles.checkButton}
        >
          Check Answers
        </button>
        <button
          type="button"
          onClick={() => {
            setRenderKey((prev) => prev + 1);
            setAnswers({});
            setShowResults(false);
          }}
          className={styles.newSetButton}
        >
          Try Different Questions
        </button>
      </form>
    </section>
  );
}
