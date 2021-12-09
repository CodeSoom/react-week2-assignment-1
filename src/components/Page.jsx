import React from 'react';

import Buttons from './Buttons';
import NumberButton from './NumberButton';

export default function Page({ onClick, count }) {
  return (
    <div>
      <NumberButton onClick={onClick} number={1}>
        Click me (
        {count}
        )
      </NumberButton>
      <Buttons onClick={onClick} />
    </div>
  );
}
