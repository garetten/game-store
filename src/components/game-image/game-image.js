import React from 'react';
import './game-image.css';

export default function GameImage({image=""}) {
  return (
    <div className='game-image' style={{backgroundImage: `url(${image})`}}>
        
    </div>
  )
}
