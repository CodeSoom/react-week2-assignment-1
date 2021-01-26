import React from 'react';

import ClickMeButton from './clickMeButton';
import NumberButtons from './numberButtons';

export default function Main({ count, onClick, onClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMeButton count={count} onClick={onClick} />
      <NumberButtons onClick={onClickNumber} />
    </div>
  );
}
