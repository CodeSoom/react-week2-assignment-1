import React, { useState } from "react";
import ReactDOM from "react-dom";

import Page from "./components/Page";

function App() {
  const [state, setState] = useState({
    count: 0
  });

  const { count } = state;

  // click me를 눌럿을때는 1만들어오게 하고
  // 나머지는 숫자만큼 들어오게 해서 더해준다.
  function handleClick(value) {
    setState({
      count: count + value
    });
  }

  return <Page count={count} onClick={handleClick} />;
}

ReactDOM.render(<App />, document.getElementById("app"));
