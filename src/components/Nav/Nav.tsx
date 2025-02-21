'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

export default function Nav() {
  const pathname = usePathname();
  
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/basics', label: 'Basics' },
    { href: '/try', label: 'Try It' },
  ];
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>TYPO</div>
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
