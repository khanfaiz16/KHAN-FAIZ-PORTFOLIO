import React from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';
import Home from './pages/Home';

function App() {
  return (
    <div className="portfolio-app">
      <BackgroundAnimation />
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;