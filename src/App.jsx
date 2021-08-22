import React, { useState } from "react";

import Page from "./components/Page";

// App의 역할은 상태 관리
// 나머지 component들은 UI를 담당.
export default function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  // click me를 눌럿을때는 1만들어오게 하고
  // 나머지는 숫자만큼 들어오게 해서 더해준다.
  function handleClick(increment) {
    setState({
      count: count + increment,
    });
  }

  return <Page count={count} onClick={handleClick} />;
}
