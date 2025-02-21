import Image from 'next/image';
import styles from './ImageBlock.module.css';

type ImageBlockProps = {
  title: string;
  text: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function ImageBlock({
  title,
  text,
  image,
}: ImageBlockProps) {
  return (
    <section className={styles.imageBlock}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <div className={styles.imageWrapper}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
          />
        </div>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
      </div>
    </section>
  );
}
