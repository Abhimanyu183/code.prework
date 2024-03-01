import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="buttons">
        <button>HOME</button>
        <button>GALLERY</button>
        <button>PRODUCT</button>
        <button>SIGN IN</button>
        <button>CONTACT US</button>
      </div>
    </nav>
  );
}

export default Navbar;
