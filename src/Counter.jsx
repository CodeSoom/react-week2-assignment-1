import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

export default function Counter({ onClickMe, onClickNumber, count }) {
  return (
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
}
