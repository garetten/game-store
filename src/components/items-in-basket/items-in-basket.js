import React from 'react';
import'./items-in-basket.css';

export default function ItemsInBasket({quantity}) {
    
  return quantity?(
    <div className='items-in-cart'>
        {quantity}
    </div>
  )
  :null
}
