import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      Counter
      <p>
        {count}
      </p>
      <p>
        <button type="button" onClick={() => setCount((prevCount) => prevCount + 1)}>
          Click Me!
          (
          {count}
          )
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => setCount((prevCount) => prevCount + i)}>{i}</button>
        ))}
      </p>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
