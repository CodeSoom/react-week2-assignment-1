import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Page from './component/Page';

function App() {
  const [count, setCount] = useState(0);

  function handleCountUp(value) {
    setCount(count + value);
  }

  return (
    <Page
      count={count}
      onClick={handleCountUp}
    />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
