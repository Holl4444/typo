import Image from 'next/image';
import styles from './Split.module.css';

type SplitSection = {
  text: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

type SplitProps = {
  title: string;
  sections: SplitSection[];
  direction?: 'imageLeft' | 'imageRight';
  singleImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export default function Split({
  title,
  sections,
  direction = 'imageLeft',
  singleImage,
}: SplitProps) {
  return (
    <section className={styles.split}>
      <h2 className={styles.articleHeader}>{title}</h2>
      <div className={`${styles.content} ${styles[direction]}`}>
        <div className={styles.textColumn}>
          {sections.map((section, index) => (
            <p key={index}>{section.text}</p>
          ))}
        </div>
        <div className={styles.imageColumn}>
          {singleImage ? (
            <Image
              src={singleImage.src}
              alt={singleImage.alt}
              width={singleImage.width}
              height={singleImage.height}
            />
          ) : (
            sections.map(
              (section, index) =>
                section.image && (
                  <Image
                    key={index}
                    src={section.image.src}
                    alt={section.image.alt}
                    width={section.image.width}
                    height={section.image.height}
                  />
                )
            )
          )}
        </div>
      </div>
    </section>
  );
}
