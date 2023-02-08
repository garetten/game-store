import React, { useMemo } from 'react';
import Button from '../button/button';
import './game-buy.css';
import { useAppDispatch,useAppSelector } from '../../redux';
import { addCart, deleteCart } from '../../redux/slice/basketSlice';
import { IGame } from '../../types/types';

interface IGameBuy{
  game:IGame;
}
export default function GameBuy({game}:IGameBuy) {
  const dispatch = useAppDispatch();
  const games = useAppSelector(state=>state.basket);
  let isGameInBasket = useMemo(()=>{
    return games.some(item=>item.id === game.id);
  },[games,game.id])
  function addBasket(e:React.MouseEvent<HTMLButtonElement>){
    e.stopPropagation();
    if(isGameInBasket){
      dispatch(deleteCart(game.id))
      isGameInBasket = false;
    }
    else{
      dispatch(addCart(game));
    }

  }
  return (
    <div className='game-buy'>
        <span className='game-buy_price'>{game.price} грн.</span>
        <Button onClick={addBasket}>{ isGameInBasket?'Убрать из корзины':'В корзину'}</Button>
    </div>
  )
}
