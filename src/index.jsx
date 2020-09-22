import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button">Click me!({state.count})</button>
      </p>
      <p>
        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>
        <button type="button">4</button>
        <button type="button">5</button>
      </p>
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
