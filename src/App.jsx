// import { useState } from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HighLits from './components/HighLits';

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLits />
    </main>
  );
};

export default App;
