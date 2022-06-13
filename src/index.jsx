import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import CountButton from './components/CountButton';
import NumberButtons from './components/NumberButtons';

function App() {
  const [count, setCount] = useState(0);

  const countUp = (number) => {
    setCount(count + Number(number));
  };
  return (
    <div>
      <p>Counter</p>
      <CountButton count={count} countUp={countUp} />
      <NumberButtons countUp={countUp} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
