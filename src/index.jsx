/* @jsx React.createElement */

import React, { Children } from 'react';
import ReactDOM from 'react-dom';


function Button({ children }) {
  return (
    <>
      <button type="button">{children}</button>
    </>
  );
}

function Buttons() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Button key={i}>{i}</Button>
      ))}
    </>
  );
}


function App() {
  return (
    <div>
      <p>hello,world!</p>
      <p><Buttons /></p>
    </div>
  );
}


ReactDOM.render(<App />, document.getElementById('app'));
