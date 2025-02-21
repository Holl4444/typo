import Image from 'next/image';
import styles from './Hero.module.css';

type HeroProps = {
  leftArticle: {
    title: string;
    content: string;
  };
  rightArticle: {
    title: string;
    content: string;
  };
  image: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

export default function Hero({
  leftArticle,
  rightArticle,
  image,
}: HeroProps) {
  return (
    <section className={styles.hero}>
      <article className={styles.leftArticle}>
        <h2 className={styles.articleHeading}>{leftArticle.title}</h2>
        <p className={styles.articleContent}>{leftArticle.content}</p>
      </article>
      <div className={styles.dinoWrap}>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width || 200}
          height={image.height || 200}
          className={styles.dinoImage}
          priority
          style={{
            objectFit: 'contain',
          }}
        />
      </div>
      <article className={styles.rightArticle}>
        <h2 className={styles.articleHeading}>
          {rightArticle.title}
        </h2>
        <p className={styles.articleContent}>
          {rightArticle.content}
        </p>
      </article>
    </section>
  );
}
