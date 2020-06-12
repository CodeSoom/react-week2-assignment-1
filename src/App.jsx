import React, { useState } from 'react';
import Page from './Page';

// App 컴포넌트;
// 보여지는 건 관심 없고,
// 상태 관리(business logic)
export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick(number) {
    setState({
      count: count + (number || 1),
    });
  }

  return (
    <Page
      count={count}
      handleClick={handleClick}
    />
  );
}
