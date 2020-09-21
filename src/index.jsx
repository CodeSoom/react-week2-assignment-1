import React from 'react';
import ReactDOM from 'react-dom';

const numbers = (upTo) => Array.from({ length: upTo }, (_, i) => i + 1);

function App() {
  return (
    <div>
      <p>
        Counter
      </p>
      <button type="button">
        Click Me!
        (
        {1}
        )
      </button>

      <div>
        {
          numbers(5).map((i) => (
            <button type="button">
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
