import Image from 'next/image';
import styles from './Feature.module.css';

type FeatureProps = {
  title: string;
  text: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  };
  imagePosition?: 'left' | 'right';
};

export default function Feature({
  title,
  text,
  image,
  imagePosition = 'right',
}: FeatureProps) {
  return (
    <section
      className={`${styles.feature} ${
        image ? styles[imagePosition] : styles.noImage
      }`}
    >
      <div className={styles.contentContainer}>
        {title && <h2 className={styles.title}>{title}</h2>}
        {text && <p className={styles.text}>{text}</p>}
      </div>
      {image && (
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className={image.className}
        />
      )}
    </section>
  );
}
