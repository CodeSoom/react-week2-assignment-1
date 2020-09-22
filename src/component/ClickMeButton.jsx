import React from 'react';

import { increaseBySteps } from '../api/increaseFunction';

export default function ClickMeButton({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(increaseBySteps(1))}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
