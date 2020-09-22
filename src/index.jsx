import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  const handleClickNumber = () => {
    setState({
      count: count + 1,
    });
  };

  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!({count})
        </button>
      </p>
      <p>
        <button type="button" onClick={() => handleClickNumber()}>
          1
        </button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
      </p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
