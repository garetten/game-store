import React, { useMemo } from 'react';
import Button from '../button/button';
import './game-buy.css';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { addCart, deleteCart } from '../../redux/slice/basketSlice';


export default function GameBuy({game}) {
  const dispatch = useDispatch();
  const games = useSelector(state=>state.basket);
  let isGameInBasket = useMemo(()=>{
    return games.some(item=>item.id === game.id);
  },[games,game.id])
  function addBasket(e){
    e.stopPropagation();
    if(isGameInBasket){
      dispatch(deleteCart({payload:game.id}))
      isGameInBasket = false;
    }
    else{
      dispatch(addCart({payload:game}));
    }

  }
  return (
    <div className='game-buy'>
        <span className='game-buy_price'>{game.price} грн.</span>
        <Button onClick={addBasket}>{ isGameInBasket?'Убрать из корзины':'В корзину'}</Button>
    </div>
  )
}
