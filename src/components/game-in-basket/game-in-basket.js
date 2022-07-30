import './game-in-basket.css'
import React from 'react'

export default function GameInBasket({game}) {
  return (
    <div className='game-in-basket'>
        <span>{game.title}</span>
        <div className='game-in-basket__price'>
            <span>{game.price} грн.</span>
        </div>
    </div>
  )
}
