import React,{useMemo, useState} from 'react';
import './order-page.css';
import { useSelector,useDispatch} from 'react-redux';
import OrderItem from '../../components/order-item/order-item';
import Button from '../../components/button/button';
import { deleteAll } from '../../redux/slice/basketSlice';
import { Link } from 'react-router-dom';


export default function OrderPage() {
  const games = useSelector(state=> state.basket);
  const [isOrderBuy,setIsOrderBuy] = useState(false);
  const dispatch = useDispatch()
  const hadleClick = ()=>{
    setIsOrderBuy((prevState)=>!prevState)
    dispatch(deleteAll());
  }
  console.log(isOrderBuy)
  
  const priceGame = useMemo(()=>{
    if(games.length === 0){
      return 0;
    }
    return games.reduce((acc,game)=>{return acc+=game.price},0);
  },[games])


  if(isOrderBuy){
    return(<div className='purchase'>
      <h2>Ваш заказ успешно оформлен!!</h2>
      <Link className='purchase__redirect' to='/'>Перейти на главную страницу</Link>
    </div>)
  }
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
            <span className="order-page__sum">{ games.length } товаров на сумму {priceGame} грн.</span>
            <Button onClick={hadleClick} className="order-page__buy">Оформить заказ</Button>
        </div>
    </div>
</div>
  )
}
