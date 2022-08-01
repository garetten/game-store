import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/hooks/useDispatch';
import GameBuy from '../game-buy/game-buy';
import GameGenre from '../game-genre/game-genre';
import GameImage from '../game-image/game-image';
import './game-item.css';
import { setCurrentGame } from '../../redux/slice/currentGame';

export default function GameItem({game}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = ()=>{
    dispatch(setCurrentGame({payload:game}))
    navigate(`/${game.title}`);
  }
  return (
    <div className='game-item' onClick={handleClick}>
        <GameImage image={game.image}/>
        <div className='game-item_details'>
            <span className='game-item_title'>{game.title}</span>
            <div className='game-item_genre'>
                {
                    game.genres.map((genre,index)=><GameGenre key={index} genre={genre}/>)
                }
            </div>
            <div className='game-item_buy'>
              <GameBuy game={game}></GameBuy>
            </div>
        </div>
    </div>
  )
}
