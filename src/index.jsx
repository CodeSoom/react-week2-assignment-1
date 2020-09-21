import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const numbers = (upTo) => Array.from({ length: upTo }, (_, i) => i + 1);

const countInSteps = (origin, step) => origin + step;

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCounterButton(step) {
    setState({
      count: countInSteps(count, step),
    });
  }

  return (
    <div>
      <p>
        Counter
      </p>
      <button type="button" onClick={() => handleCounterButton(1)}>
        Click me!
        (
        {count}
        )
      </button>

      <div>
        {
          numbers(5).map((i) => (
            <button key={i} type="button" onClick={() => handleCounterButton(i)}>
              {i}
            </button>
          ))
        }
      </div>
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
