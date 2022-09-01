import React from 'react';
import './header.styles.scss';

const Header = () => {
  return (
    <div className="header">
      <img
        src={require('../../asessts/popshap_logo_tagline_allwhite 1.png')}
        alt="Logo"
        className="logo"
      />
    </div>
  );
};

export default Header;
