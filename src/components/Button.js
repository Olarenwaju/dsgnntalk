import React from 'react';
import './button.css';

const Button = ({ text, onClick, className }) => {
  return (
    <button className={`text-black font-clash uppercase font-semibold bg-white hover:bg-white/50 hover:rounded-none btn-three ${className}`} onClick={onClick}>
        {text}
    </button>
  )
}

export default Button;