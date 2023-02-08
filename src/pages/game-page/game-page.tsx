import React from 'react';
import './game-page.css';
import { useAppSelector } from '../../redux';
import GameImage from '../../components/game-image/game-image'
import GameGenre from '../../components/game-genre/game-genre'
import GameBuy from '../../components/game-buy/game-buy'


export default function GamePage() {
  const game = useAppSelector(state=>state.currentGame.currentGame);
  if(!game){
    return null
  }
  return (
    <div className="game-page">
    <h1 className="game-page__title">{ game.title }</h1>
    <div className="game-page__content">
      <div className="game-page__left">
        <iframe
          className="game-page__video"
          src={game.video}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
      </div>
      <div className="game-page__right">
        <GameImage image={game.image} />
        <p>{game.description}</p>
        <p className="secondary-text">Популярные метки для этого продукта:</p>
        {game.genres.map((genre) => (
          <GameGenre genre={genre} key={genre} />
        ))}
        <div className="game-page__buy-game">
          <GameBuy game={game} />
        </div>
      </div>
    </div>
  </div>
  )
}
