import React from 'react'
import './Navbar.css';
import logo from '../Assets/Rivo.png';
import cart from '../Assets/Group 1.svg';

const Navbar = () => {
  return (
    <div className='navbar'>
       <div className='nav-logo'>
        <img src={logo} alt='logo' />
       </div>
       <ul className="nav-menu">
        <li>Home</li>
        <li>Shop</li>
        <li>Features</li>
        <li>Contact</li>
       </ul>
       <div className="login-cart">
        <img src={cart} alt="cart" />
        <div className='nav-cart-count'>0</div>
        <button>Login</button>
       </div>
    </div>

  )
}

export default Navbar