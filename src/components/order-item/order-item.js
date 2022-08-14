import React from 'react';
import './order-item.css';
import { useDispatch} from 'react-redux/es/exports';
import GameImage from '../game-image/game-image';
import {AiOutlineCloseCircle} from 'react-icons/ai'
import { deleteCart } from '../../redux/slice/basketSlice';

export default function OrderItem({game}) {
    const dispatch = useDispatch();

    const handleDeleteClick = ()=>{
        console.log("click")
        dispatch(deleteCart({payload:game.id}))
    }
  return (
<div className="order-item">
    <div className="order-item__cover">
    <GameImage image={ game.image }/>
    </div>
    <div className='order_text_container'>
    <div className="order-item__title">
    <span> { game.title } </span>
    </div>
    <div className="order-item__price">
        <span>{ game.price } грн.</span>
        <AiOutlineCloseCircle
            size={25}
            className="cart-item__delete-icon"
            onClick={handleDeleteClick}
        />
    </div>
    </div>
</div>
  )
}
