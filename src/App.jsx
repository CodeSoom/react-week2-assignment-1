import React, { useState } from 'react';

import Title from './Title';
import ClickMeButton from './ClickMeButton';
import CountButtons from './CountButtons';


export default function App() {
  const [number, setNumber] = useState(0);

  const handleClickMe = (count) => {
    setNumber(number + count);
  };

  return (
    <div>
      <Title />
      <ClickMeButton
        number={number}
        handleClickMe={handleClickMe}
      />
      <CountButtons
        handleClickMe={handleClickMe}
      />
    </div>
  );
}
