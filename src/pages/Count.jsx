import React, { useState } from 'react';

import ClickMeButton from '../components/ClickMeButton';
import Buttons from '../components/Buttons';

export default function Count() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <ClickMeButton count={count} onClick={handleClick} />
      <Buttons onClick={handleClick} />
    </div>
  );
}
