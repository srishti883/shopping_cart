import React from 'react';
import { Link } from "react-router-dom";
import "./header.css"

function Header() {
  return (
    <header className='header'>
      <div>
        <h1>
          <Link to="/" className='logo'>
            Electronic gadgets
          </Link>
        </h1>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <Link to="/" >Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/cart">
              <i class="fas fa-shopping-cart" />
            </Link>
          </li>
        </ul>
      </div>
    </header>

  )
}

export default Header
