import React from 'react';
import Button from './Button';

function Buttons() {
 return (
  <div>
   {[1, 2, 3, 4, 5].map((number) => <Button key={number}>{number}</Button>)}
  </div>
 );
}

export default Buttons;
