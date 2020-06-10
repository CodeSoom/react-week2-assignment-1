import React, { useState } from 'react';

import Title from './components/Title';
import Counter from './components/Counter';

const BUTTONS = [1, 2, 3, 4, 5];

export default () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const onClickCount = (number) => {
    setState({
      ...state,
      count: count + number,
    });
  };

  return (
    <div>
      <Title title="Counter" />
      <Counter buttons={BUTTONS} count={count} onClick={onClickCount} />
    </div>
  );
};
