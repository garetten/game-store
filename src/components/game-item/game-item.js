import React from 'react';
import GameBuy from '../game-buy/game-buy';
import GameGenre from '../game-genre/game-genre';
import GameImage from '../game-image/game-image';
import './game-item.css';

export default function GameItem({game}) {
  return (
    <div className='game-item'>
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
