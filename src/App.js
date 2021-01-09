import React from 'react'
import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import Explore from './components/Explore';
import Entertainment from './components/Entertainment'
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Banner />
      <Header />
      <Explore />
      <Entertainment />
      <Contact />
    </div>
  )
}

export default App
