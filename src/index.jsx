import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMeButton from './ClickMeButton';
import CounterButtons from './CounterButtons';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <ClickMeButton count={count} setCount={setCount} />
      <CounterButtons setCount={setCount} />
    </>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('app'));
