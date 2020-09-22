/* @jsx React.createElement */

import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

function CountApp({ count, onClick, onNumberClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        count={count}
        onClick={onNumberClick}
      />
    </div>
  );
}

export default CountApp;
