'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ScratchClientProps } from '../../app/types/scratch';
import styles from './ScratchClient.module.css';

const ScratchEmbed = dynamic(
  () => import('../ScratchEmbed/ScratchEmbed'),
  {
    loading: () => <LoadingState />,
    ssr: false,
  }
);

function LoadingState() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingText}>
        Loading Scratch Project...
      </div>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
}

export default function ScratchClient({
  projectId,
  title,
  description,
}: ScratchClientProps) {
  return (
    <Suspense fallback={<LoadingState />}>
      <ScratchEmbed
        projectId={projectId}
        title={title}
        description={description}
      />
    </Suspense>
  );
}
