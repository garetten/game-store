import React from 'react';
import './game-genre.css';

interface IGameGenre{
  genre:string
}

export default function GameGenre({genre}:IGameGenre) {
  return (
    <span className='game-genre'>
        {genre}
    </span>
  )
}
