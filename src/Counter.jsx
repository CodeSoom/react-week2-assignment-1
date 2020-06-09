import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

const Counter = ({ onClickMe, onClickNumber, count }) => (
  <div>
    <p>
      <Button onClick={onClickMe}>
        Click me! (
        {count}
        )
      </Button>
    </p>
    <p>
      <Buttons onClick={onClickNumber} />
    </p>
  </div>
);

export default Counter;
