import React from 'react';

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
            <button type="button">{i}</button>
          ))
        }
      </p>
    </div>
  );
}

export default App;
