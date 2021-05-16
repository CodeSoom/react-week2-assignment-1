import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

export default function Page({ counter, onClickPlusCount }) {
  return (
    <div>
      <h2>Counter</h2>
      <Button
        onClick={() => onClickPlusCount(1)}
      >
        Click me!
        (
        {counter}
        )
      </Button>
      <br />
      <br />
      <Buttons onClickPlusCount={onClickPlusCount} />
    </div>
  );
}
