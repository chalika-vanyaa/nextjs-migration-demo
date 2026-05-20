import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="page-wrapper">
      <Head>
        <title>Simple Product Store</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header className="header">
        <div className="container">
          <nav className="nav">
            <Link href="/">
              <a className="logo">NextStore</a>
            </Link>
            <div className="nav-links">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/products">
                <a>Products</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <div className="container">{children}</div>
      </main>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} NextStore. All Rights Reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        .page-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        main {
          flex: 1;
        }
        .header {
          border-bottom: 1px solid var(--border-color);
          background-color: var(--background-color);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-weight: 700;
          font-size: 1.75rem;
          color: var(--text-color);
        }
        .logo:hover {
          text-decoration: none;
        }
        .nav-links a {
          margin-left: 1.5rem;
          color: var(--text-color-light);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .nav-links a:hover {
          color: var(--primary-color);
          text-decoration: none;
        }
        .footer {
          background-color: var(--background-color);
          border-top: 1px solid var(--border-color);
          padding: 1rem 0;
          text-align: center;
          color: var(--text-color-light);
          font-size: 0.9rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
