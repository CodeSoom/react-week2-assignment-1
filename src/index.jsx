import React from "react";
import ReactDOM from "react-dom";

import ClickMeButton from './ClickMeButton'
import NumberButton from './NumerButton'

const App = () => {
  const [number, setNumber] = React.useState(0)

  const handleClick = (num = 1) => {
    setNumber(number => number + num)
  }

  return (
    <>
      <h1>Counter</h1>
      <ClickMeButton number={number} onClick={handleClick} />
      <NumberButton onClick={handleClick} />
    </>
  )
};

ReactDOM.render(<App />, document.getElementById("app"));
