import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <p>Counter</p>
      <button type="button">Click me!()</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
