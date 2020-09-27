import React from 'react';

import Buttons from './Buttons';
import Button from './Button';
import { increaseBySteps } from '../utills/increaseFunction';

export default function Page({ count, numbers, onClick }) {
  return (
    <div>
      <p>
        Counter
      </p>
      <Button onClick={() => onClick(increaseBySteps(1))}>
        Click me
        (
        {count}
        )
      </Button>
      <Buttons numbers={numbers} onClick={onClick} />
    </div>
  );
}
