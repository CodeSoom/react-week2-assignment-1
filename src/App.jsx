import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickMe() {
    setState({
      count: count + 1,
    });
  }

  function handleClickNumbers() {
    console.log("hello");
  }


  function handleClick() {
    if () { // ClickMe 가 클릭 되었을 때
      return (
        <Page
          count={count}
          onClick={handleClickMe}
        />
      );
    }

    if () { // ClickNumbers가 클릭 되었을 때 
      return (
        <Page
          count={count}
          onClick={handleClickNumbers}
        />
      );
    }
  }

  // return (
  //   <Page
  //     count={count}
  //     onClick={handleClickMe}
  //   />
  // );
}
