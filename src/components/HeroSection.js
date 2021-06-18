import React from 'react';
import '../App.css';
import './HeroSection.css';
import MobileStoreButton from 'react-mobile-store-button';

function HeroSection() {
  const iOSUrl = 'https://www.apple.com/app-store/';
  const androidUrl = 'https://play.google.com/store';

  return (
    <div className='hero-container'>
      <img className='background' src='/images/banner.png'/>
      <div className='hero-btns'>
        <MobileStoreButton            
          store="android"
          height='104px'
          width='214px'
          url={androidUrl}
          linkProps={{ title: 'Google Play' }}
          />
        <MobileStoreButton
          store="ios"
          height='90px'
          width='182px'
          url={iOSUrl}
          linkProps={{ title: 'App Store' }}
        />
      </div>
    </div>
  );
}

export default HeroSection;
