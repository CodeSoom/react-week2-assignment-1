import React from 'react';
import { increaseBySteps } from '../utills/increaseFunction';

import Button from './Button';

export default function Buttons({ numbers, onClick }) {
  return (
    <div>
      {
        numbers.map((i) => (
          <Button onClick={() => onClick(increaseBySteps(i))}>
            {i}
          </Button>
        ))
      }
    </div>
  );
}
