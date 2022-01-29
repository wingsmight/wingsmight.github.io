import React from 'react';
import '../../App.css';
import AppInfoSection from '../AppInfoSection';
import Footer from '../Footer';
import { fastDice, audioDefender } from './Data';

function Home() {
  return (
    <>
      <AppInfoSection {...fastDice} />
      <AppInfoSection {...audioDefender} />
      <Footer />
    </>
  );
}

export default Home;
