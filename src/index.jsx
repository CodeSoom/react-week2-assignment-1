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

  const handleClickNumber = (value) => {
    setState({
      count: count + value,
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
        {[1, 2, 3, 4, 5].map((i) => (
          <button key={i} type="button" onClick={() => handleClickNumber(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
