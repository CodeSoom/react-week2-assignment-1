import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Buttons from './Buttons';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={() => setCount(count + 1)} />
      <Buttons count={count} setFunction={setCount} />
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
