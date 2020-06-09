import React from 'react';
import ClickmeButton from './ClickmeButton';
import NumberButtons from './NumberButtons';

export default function Counter({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <ClickmeButton
        count={count}
        onClick={onClick}
      />
      <NumberButtons
        onClick={onClick}
      />
    </div>
  );
}
