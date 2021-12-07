import React from 'react';
import Buttons from '../components/Buttons';
import Counter from '../components/Counter';

function CounterPage({ count, onClick, onClickNumber }) {
 return (
  <div>
   <p>Hello, World!!!</p>
   <Counter count={count} onClick={onClick} />
   <Buttons onClickNumber={onClickNumber} />
  </div>
 );
}

export default CounterPage;
