import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const countInSteps = (step) => (count) => step + count;

const numbers = (upTo) => Array.from(
  { length: upTo },
  (_, i) => ({ key: i + 1, value: countInSteps(i + 1) }),
);

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleCounterButton(increase) {
    setState({
      count: increase(count),
    });
  }

  return (
    <div>
      <p>
        Counter
      </p>
      <button type="button" onClick={() => handleCounterButton(countInSteps(1))}>
        Click me!
        (
        {count}
        )
      </button>

      <div>
        {
          numbers(5).map(({ key, value }) => (
            <button key={key} type="button" onClick={() => handleCounterButton(value)}>
              {key}
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
