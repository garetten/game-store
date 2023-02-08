import React from 'react';
import'./items-in-basket.css';

interface IItemsInBasket{
  quantity:number
}
export default function ItemsInBasket({quantity}:IItemsInBasket) {
    
  return quantity?(
    <div className='items-in-cart'>
        {quantity}
    </div>
  )
  :null
}
