import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [counter, setCounter] = useState(0);

  // ui 데이터
  const counterPads = [1, 2, 3, 4, 5];
  const counterLabel = 'Counter';
  const counterButtonLabel = 'Click me!';

  function handleCounter(countNumber = 1) {
    setCounter(counter + countNumber);
  }

  return (
    <div>
      <p>{counterLabel}</p>
      <button
        type="button"
        onClick={() => {
          handleCounter();
        }}
      >
        {counterButtonLabel}({counter})
      </button>
      <p>
        {counterPads.map((pad) => (
          <button
            type="button"
            key={pad}
            onClick={() => {
              handleCounter(pad);
            }}
          >
            {pad}
          </button>
        ))}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
