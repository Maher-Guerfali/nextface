import Head from 'next/head';
import React, { useState } from 'react';

const FirstApp: React.FC = () => {
  // State to hold the dynamic URL for the Unity WebGL app
  const [unityAppLink, setUnityAppLink] = useState<string>('https://nextfaces3.s3.amazonaws.com/Release/index.html');

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Head>
        <title>Real-Time Video Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Top Navbar */}
      <header className="w-full h-[7vh] bg-gray-800 flex items-center justify-center">
        <img src="/images/w-p-800.png" alt="Brilliant Logo new" className="w-25px h-25px" />
      </header>

      <div className="flex-1 flex">
        {/* Left Sidebar */}
        <div className="w-[20%] bg-gray-900"></div>

        {/* Main Content with Centered iFrame */}
        <main className="flex-1 flex items-center justify-center">
          <iframe
            src={unityAppLink} // Link from state
            width="600"
            height="600"
            className="border-none"
            title="Unity WebGL App"
          />
        </main>

        {/* Right Sidebar */}
        <div className="w-[20%] bg-gray-900"></div>
      </div>

      {/* Bottom Navbar */}
      <footer className="w-full h-[7vh] bg-gray-800 flex items-center justify-center">
        <img src="/brilliant_logo.png" alt="Brilliant Logo" className="h-12" />
      </footer>
    </div>
  );
};

export default FirstApp;
