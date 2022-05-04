import React from 'react';
import './basket.css';
import {BiCartAlt} from 'react-icons/bi'

export default function Basket() {
  return (
    <div className='basket'>
        <BiCartAlt size={25} className='basket_icon'/>
        <span className='basket_total-price'>2313 грн.</span>
    </div>
  )
}
