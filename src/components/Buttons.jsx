import React from 'react';
import Button from './Button';

export default function Buttons({ onClickNumber }) {
 return (
  <div>
   {[1, 2, 3, 4, 5].map((number) => (
    <Button key={number} onClick={() => onClickNumber(number)}>
     {number}
    </Button>
   ))}
  </div>
 );
}
