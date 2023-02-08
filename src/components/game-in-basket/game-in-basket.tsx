import './game-in-basket.css'
import React from 'react'
import { IGame } from '../../types/types'

interface IGameInBasket{
  game:IGame
}


export default function GameInBasket({game}:IGameInBasket) {
  return (
    <div className='game-in-basket'>
        <span>{game.title}</span>
        <div className='game-in-basket__price'>
            <span>{game.price} грн.</span>
        </div>
    </div>
  )
}
