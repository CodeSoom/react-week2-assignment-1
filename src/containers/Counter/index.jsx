import React, { useState } from 'react';
import Counter from '../../components/Counter';

export default () => {
  const [state, setState] = useState({
    count: 0,
    buttons: [1, 2, 3, 4, 5],
  });

  const { count, buttons } = state;

  const onUpdateCount = (number) => {
    setState({
      ...state,
      count: count + number,
    });
  };
  return <Counter buttons={buttons} count={count} onClick={onUpdateCount} />;
};
