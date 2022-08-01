import React,{useMemo} from 'react';
import './order-page.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import OrderItem from '../../components/order-item/order-item';

export default function OrderPage() {
  const games = useSelector(state=> state.basket);
  console.log(games)
  
  const priceGame = useMemo(()=>{
    if(games.length === 0){
      return 0;
    }
    return games.reduce((acc,game)=>{return acc+=game.price},0);
  },[games])

  if(games.length === 0){
    return (<div>Ваша корзина пуста!</div>)
  }
  return (
    <div className="order-page">
    <div className="order-page__left">
        { games.map(game => <OrderItem game={game}/>)}
    </div>
    <div className="order-page__right">
        <div className="order-page__total-price">
            <span>{ games.length } товаров на сумму {priceGame} грн.</span>
        </div>
    </div>
</div>
  )
}
