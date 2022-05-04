import React from 'react';
import './game-genre.css';

export default function GameGenre({genre}) {
  return (
    <span className='game-genre'>
        {genre}
    </span>
  )
}
