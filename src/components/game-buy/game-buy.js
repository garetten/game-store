import React from 'react';
import Button from '../button/button';
import './game-buy.css';

export default function GameBuy({game}) {
  return (
    <div className='game-buy'>
        <span className='game-buy_price'>{game.price} грн.</span>
        <Button onClick={()=>{}}>В корзину</Button>
    </div>
  )
}
