import React from 'react';
import './button.css'

interface IButton{
  onClick:(e:React.MouseEvent<HTMLButtonElement>)=>void;
  children:string;
}

export default function Button({onClick,children,}:IButton) {
  return (
    <button onClick={onClick} className='btn-buy'>
        {children}
    </button>
  )
}
