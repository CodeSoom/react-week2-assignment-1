import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Title() {
  return (
    <p>
      Counter
    </p>
  );
}

function MainButton({ count, onClick }) {
  return (
    <p>
      <button type="button" onClick={() => onClick({ count })}>
        Click me!(
        {count}
        )
      </button>
    </p>
  );
}

function App() {
  const [state, setState] = useState({
    count: 0,
    numbers: [1, 2, 3, 4, 5],
    increment: 0,
  });

  function handleMainClick({ count }) {
    setState({
      count: count + 1,
    });
  }

  const { count } = state;

  return (
    <div>
      <Title />
      <MainButton
        count={count}
        onClick={handleMainClick}
      />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
