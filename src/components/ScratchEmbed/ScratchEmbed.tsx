import styles from './ScratchEmbed.module.css';

type ScratchEmbedProps = {
  projectId: string;
  title?: string;
  description?: string;
};

export default function ScratchEmbed({
  projectId,
  title = 'Try TypeScript',
  description = 'A dinosaur finds bugs in his code without TypeScript',
}: ScratchEmbedProps) {
  return (
    <section className={styles.scratchSection}>
      <h2>{title}</h2>
      <div className={styles.scratchContainer}>
        <div className={styles.scratchWrapper}>
          <iframe
            src={`https://scratch.mit.edu/projects/${projectId}/embed`}
            width="485"
            height="402"
            allowFullScreen
            title={title}
            aria-label={description}
            style={{ border: 0 }}
          />
          <p className={styles.srOnly}>{description}</p>
        </div>
      </div>
    </section>
  );
}
