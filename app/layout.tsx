import type { Metadata } from 'next';
import React, { ReactNode } from 'react';
import Link from 'next/link';
import '../styles/globals.css';
import styles from '../styles/Layout.module.css';

export const metadata: Metadata = {
  title: 'NextStore: A Modern Product Store',
  description: 'A demo application built with Next.js',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles['page-wrapper']}>
          <header className={styles.header}>
            <div className="container">
              <nav className={styles.nav}>
                <Link href="/" className={styles.logo}>
                  NextStore
                </Link>
                <div className={styles['nav-links']}>
                  <Link href="/">Home</Link>
                  <Link href="/products">Products</Link>
                  <Link href="/orders">Orders</Link>
                </div>
              </nav>
            </div>
          </header>
          <main>{children}</main>
          <footer className={styles.footer}>
            <div className="container">
              <p>
                © {new Date().getFullYear()} NextStore. All Rights Reserved.
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
