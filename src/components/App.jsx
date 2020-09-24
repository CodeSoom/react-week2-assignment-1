import React, { useState } from 'react';

import Page from './Page';

export default function APP() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(conditionValue) {
    setState({
      count: count + conditionValue,
    });
  }

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
