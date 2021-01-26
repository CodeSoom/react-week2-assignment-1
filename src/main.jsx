import React from 'react';

import ClickMeButton from './clickMeButton';
import NumberButtons from './numberButtons';

export default function Main({ count, onClickMeButton, onClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={onClickMeButton} />
      <NumberButtons onClick={onClickNumber} />
    </div>
  );
}
