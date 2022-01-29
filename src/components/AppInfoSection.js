import React from 'react';
import './AppInfoSection.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import MobileStoreButton from 'react-mobile-store-button';

function AppInfoSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  androidStoreDisableSymbols,
  androidStoreUrl,
  iosStoreDisableSymbols,
  iosStoreUrl
}) {
  return (
    <>
      <div
        className={lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row home__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <div className='top-line'>{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <MobileStoreButton            
                  store={"android" + androidStoreDisableSymbols}
                  height='104px'
                  width='214px'
                  url={androidStoreUrl}
                />
                <MobileStoreButton            
                  store={"ios" + iosStoreDisableSymbols}
                  height='90px'
                  width='182px'
                  url={iosStoreUrl}
                />
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src={img} alt={alt} className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr class="solid"/>
    </>
  );
}

export default AppInfoSection;
