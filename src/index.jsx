import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return <div>Counter</div>;
}

function ButtonClickme() {
  const [count, setCount] = useState(0);
  return (
    <button type="button" onClick={() => { setCount(count + 1); }}>
      Click me!
      (
      {count}
      )
    </button>
  );
}

function Button(value) {
  return (
    <button type="button" key={value}>
      {value}
    </button>
  );
}

function ButtonNumber() {
  return (
    [1, 2, 3, 4, 5].map((i) => (
      Button(i)
    )));
}

function App() {
  return (
    <div>
      <Title />
      <p>
        <ButtonClickme />
      </p>
      <p>
        <ButtonNumber />
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
