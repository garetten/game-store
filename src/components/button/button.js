import React from 'react';
import './button.css'

export default function Button({onClick,type,children,size='s'}) {
  return (
    <button onClick={onClick} className='btn-buy'>
        {children}
    </button>
  )
}
