import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ClickMeButton from './ClickMeButton';
import CounterButtons from './CounterButtons';

const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>Counter</div>
      <ClickMeButton count={count} setCount={setCount} />
      <CounterButtons setCount={setCount} />
    </>
  );
};

export default Home;

ReactDOM.render(<Home />, document.getElementById('app'));
