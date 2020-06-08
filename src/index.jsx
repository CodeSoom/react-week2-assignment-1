import React from 'react';
import ReactDOM from 'react-dom';

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Counter() {
  return (
    <div>
      <p>
        Counter
      </p>
      <p>
        <Button>
          Click me!
        </Button>
      </p>
      {
        [1, 2, 3, 4, 5].map((i) => (
          <Button>
            {i}
          </Button>
        ))
      }
    </div>
  );
}

ReactDOM.render(
  <Counter />,
  document.getElementById('app'),
);
