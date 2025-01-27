// import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HighLits from "./components/HighLits";
import Model from "./components/Model";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HighLits />
      <Model />
    </main>
  );
};

export default App;

