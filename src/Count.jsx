import React, { useState } from 'react';

import ClickMeButton from './ClickMeButton';
import CountUpButtonBox from './CountUpButtonBox';

export default function Count() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleCountUp = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <ClickMeButton count={count} onClick={() => handleCountUp(1)} />
      <br />
      <CountUpButtonBox handleCountUp={handleCountUp} />
    </div>
  );
}
