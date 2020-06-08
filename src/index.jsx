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
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
