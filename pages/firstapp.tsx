import Head from 'next/head';
import styles from '../styles/Home.module.css';

import React from 'react';

const FirstApp: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Real-Time Video Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to <a href="https://yourapp.com">Our Video Editor App!</a>
        </h1>
      </main>

      <footer>
        <a
          href="https://yourapp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/your_logo.png" alt="Your Logo" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
      `}</style>

      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        }
      `}</style>
    </div>
  );
}

export default FirstApp;
