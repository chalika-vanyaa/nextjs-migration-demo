import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function HomePage() {
  return (
    <div className="container">
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to NextStore</h1>
        <p className={styles.subtitle}>
          Discover unique, hand-crafted items you won't find anywhere else.
        </p>
        <Link href="/products" className={styles.ctaButton}>
          Shop Now
        </Link>
      </div>
    </div>
  );
}
