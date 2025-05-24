import React from 'react';
import header from '../assets/header.jpg'; // Make sure this path is correct
import './Header.css';

const Header = () => (
  <div
    className="custom-header"
    style={{ backgroundImage: `url(${header})` }}
  >
    <nav className="breadcrumb">
      <h1>Login</h1>
      <a href="/">Homepage</a> &gt; <span>Page</span>&gt; <span className='span1'>Login</span>
    </nav>
  </div>
);

export default Header;