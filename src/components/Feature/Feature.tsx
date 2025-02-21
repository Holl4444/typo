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
      <p>{text}</p>
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
