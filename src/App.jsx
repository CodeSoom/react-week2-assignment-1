import React from 'react';
import Page from './components/Page';
import increaseCount from './components/increaseCount';

export default function App() {
  const {
    count,
    handleClick,
  } = increaseCount();

  return (
    <Page
      count={count}
      onClick={handleClick}
    />
  );
}
