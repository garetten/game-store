import React, { useCallback, useMemo, useState } from 'react';
import './basket.css';
import {BiCartAlt} from 'react-icons/bi';
import { useAppSelector } from '../../redux';
import BasketMenu from '../cart-menu/basket-menu';
import ItemsInBasket from '../items-in-basket/items-in-basket';
import { useNavigate } from 'react-router-dom';

export default function Basket() {
  const [isBasketMenuVisible,setIsBasketMenuVisible] = useState(false);
  const game = useAppSelector(state=>state.basket);
  const navigate = useNavigate();

  const handleClick = useCallback( ()=>{
    setIsBasketMenuVisible(false);
    navigate(`/order`);
  },[navigate] )
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
        { isBasketMenuVisible && <BasketMenu items={game} onClick={handleClick} totalPrice={priceGame}></BasketMenu>}
    </div>
  )
}
