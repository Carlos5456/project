import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tutorials from './components/Tutorials';
import News from './components/News';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Tutorials />
        <News />
        <Questions />
      </main>
      <Footer />
    </div>
  );
}

export default App;