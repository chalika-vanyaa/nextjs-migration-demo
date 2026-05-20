import React from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

const HomePage = () => {
  return (
    <Layout>
      <div className={styles.hero}>
        <h1 className={styles.title}>Welcome to NextStore</h1>
        <p className={styles.subtitle}>
          Discover unique, hand-crafted items you won't find anywhere else.
        </p>
        <Link href="/products">
          <a className={styles.ctaButton}>Shop Now</a>
        </Link>
      </div>
    </Layout>
  );
};

export default HomePage;
