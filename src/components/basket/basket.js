import React, { useMemo, useState } from 'react';
import './basket.css';
import {BiCartAlt} from 'react-icons/bi';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import BasketMenu from '../cart-menu/basket-menu';
import ItemsInBasket from '../items-in-basket/items-in-basket';

export default function Basket() {
  const [isBasketMenuVisible,setIsBasketMenuVisible] = useState(false);
  const game = useSelector(state=>state.basket);
  const priceGame = useMemo(()=>{
    if(game.length === 0){
      return 0;
    }
    return game.reduce((acc,game)=>{return acc+=game.price},0);
  },[game])

  const basketMenuVisible = ()=>{setIsBasketMenuVisible((preState)=>!preState)}
  return (
    <div className='basket'>
        <ItemsInBasket quantity= {game.length}/>
        <BiCartAlt size={25} className='basket_icon'onClick={basketMenuVisible}/>
        <span className='basket_total-price'>{priceGame?priceGame + " грн.":''}</span>
        { isBasketMenuVisible && <BasketMenu items={game} onClick={()=>{}} totalPrice={priceGame}></BasketMenu>}
    </div>
  )
}
