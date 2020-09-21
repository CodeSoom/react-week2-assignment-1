import React from 'react';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

function MainPage({ number, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMeButton
        number={number}
        onClick={onClick}
      />
      <NumberButtons
        onClick={onClick}
      />
    </div>
  );
}

export default MainPage;
