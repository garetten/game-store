import React from 'react';
import './header.css';
import{Link} from 'react-router-dom';
import Basket from '../basket/basket';

export default function Header() {
  return (
    <div className='header'>
        <div className='wrapper'>
            <Link className='header_link' to='/'>Game Store</Link>
        </div>
        <div className='wrapper header_cart-btn-wrapper'>
            <Basket></Basket>
        </div>
    </div>
  )
}
