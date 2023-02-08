import React from 'react'
import { IGame } from '../../types/types'
import Button from '../button/button'
import GameInBasket from '../game-in-basket/game-in-basket'
import './basket-menu.css'

interface IBasketMenu{
  items:IGame[],
  onClick:()=>void,
  totalPrice:number

}

export default function BasketMenu({items,onClick,totalPrice}:IBasketMenu) {

  return (
    <div className='basket-menu'>
      <div className='basket-menu__games-list'>
        {
          items.length? items.map(game=> <GameInBasket key={game.id} game={game}/>): 'Корзина пустая'
        }
      </div>
      {
        items.length?
        <div className='basket-menu__arrange'>
          <div className='basket-menu__total-price'>
            <span>Итого:</span>
            <span>{totalPrice}</span>
          </div>
            <Button onClick={onClick}>Оформить заказ</Button>
          
        </div>
        :null
      }
    </div>
  )
}
