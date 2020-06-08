import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleCountUp = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <div>
      <h1>Counter</h1>
      <button type="button" onClick={() => handleCountUp(1)}>
        Click me!! (
        {count}
        )
      </button>
      <br />
      {[1, 2, 3, 4, 5].map((num) => (
        <button type="button" onClick={() => handleCountUp(num)}>{num}</button>
      ))}
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
