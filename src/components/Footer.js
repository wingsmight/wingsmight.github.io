import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { ReactComponent as WMLogo } from './wm.svg';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Форма для фидбека или коммерческого предложения
        </p>
        <div className='input-areas'>
          <form>
            <textarea
              className='footer-input'
              name='message'
              placeholder='Введите сообщение...'
            />
            <div className='buttonSend'>
              <Button buttonStyle='btn--outline'>Отправить</Button>
            </div>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Контакты</h2>
            <h3 to='/'>email: azzifastgames@gmail.com</h3>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <div className='social-logo'>
              Wings might
              <div className='inlineLogo'>
                <WMLogo />
              </div>
            </div>
          </div>
          <small class='website-rights'>Ihor Cherkun © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
