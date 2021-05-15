import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

export default function Page({ counter, onClickPlusCount, onClickNumber }) {
  return (
    <div>
      <h2>Counter</h2>
      <Button
        onClick={onClickPlusCount}
      >
        Click me!
        (
        {counter}
        )
      </Button>
      <br />
      <br />
      <Buttons handleClickNumber={onClickNumber} />
    </div>
  );
}
