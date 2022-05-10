import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClickCount = () => {
    setState({
      count: count + 1,
    });
  };

  const handleClickNumbers = (number) => {
    setState({
      count: count + number,
    });
  };

  return (
    <>
      <p>Counter</p>
      <p>
        <button type="button" onClick={() => handleClickCount()}>
          Click me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => handleClickNumbers(i)}>
            {i}
          </button>
        ))}
      </p>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
