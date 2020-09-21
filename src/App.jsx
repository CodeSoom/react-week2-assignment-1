import React from 'react';
import NumberButton from './components/NumberButton';

function App() {
  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button">Click me! (0)</button>
      </p>
      <p>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <NumberButton value={i} key={i} />
          ))
        }
      </p>
    </div>
  );
}

export default App;
