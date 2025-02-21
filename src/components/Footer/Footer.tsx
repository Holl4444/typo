'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Top' },
    { href: '/basics', label: 'Basics' },
    { href: '/try', label: 'Try It' },
  ];
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {navLinks
          .filter((link) => link.href !== pathname) 
          .map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
