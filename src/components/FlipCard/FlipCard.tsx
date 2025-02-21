'use client';

import styles from './FlipCard.module.css';
import type { FlipCard } from '../../app/types/cards';

type CardFlipProps = {
  cards: FlipCard[];
  title: string;
};

export default function CardFlip({ cards, title }: CardFlipProps) {
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.articleHeading}>{title}</h2>
      <div className={styles.cardGrid}>
        {cards.map((card) => (
          <div key={card.id} className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.cardFront}>
                <p>{card.statement}</p>
              </div>
              <div
                className={`${styles.cardBack} ${
                  card.answer.isTrue
                    ? styles.trueAnswer
                    : styles.falseAnswer
                }`}
              >
                <p>
                  <strong>
                    {card.answer.isTrue ? 'TRUE' : 'FALSE'}
                  </strong>
                  :{card.answer.explanation}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
