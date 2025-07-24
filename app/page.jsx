'use client';

import Player from './components/Player.jsx';
import './app/globals.css';

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      <Player />
    </main>
  );
}
