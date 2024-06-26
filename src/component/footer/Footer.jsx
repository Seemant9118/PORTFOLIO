import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import LinkedIN from '@iconscout/react-unicons/icons/uil-linkedin';
import Github from '@iconscout/react-unicons/icons/uil-github';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: '100%' }} />
      <div className="f-content">
        <span>Made with ❤️ by Seemant Kamlapuri</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/seemant_20_11/"><Insta color='white' size='3rem' />
          </a>
          <a href="https://www.linkedin.com/in/seemant-kamlapuri-b682331b5/"><LinkedIN color='white' size='3rem' /></a>
          <a href="https://github.com/Seemant9118"><Github color='white' size='3rem' /></a>
        </div>
      </div>
    </div>
  )
}

export default Footer