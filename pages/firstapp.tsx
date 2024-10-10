import Head from 'next/head';
import React from 'react';

const FirstApp: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Head>
        <title>Real-Time Video Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold">
          Welcome to{' '}
          <a href="https://nextfaces3.s3.amazonaws.com/Release/index.html" className="text-blue-500 hover:underline">
            Our Video Editor App!
          </a>
        </h1>

        {/* Embed Unity WebGL App here */}
        <iframe
          src="https://nextfaces3.s3.amazonaws.com/Release/index.html"
          width="800"
          height="600"
          title="Unity WebGL App"
          className="mt-5 border-none"
        />
      </main>

      <footer className="w-full h-24 border-t flex items-center justify-center">
        <a
          href="https://yourapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-500 hover:text-gray-700"
        >
          Powered by{' '}
          <img src="/your_logo.png" alt="Your Logo" className="ml-2 w-6 h-6" />
        </a>
      </footer>
    </div>
  );
};

export default FirstApp;
