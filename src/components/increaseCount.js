import { useState } from 'react';

export default function increaseCount() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + number,
    });
  }

  return {
    count,
    handleClick,
  };
}
