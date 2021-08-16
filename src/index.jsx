import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

// eslint-disable-next-line react/prop-types
function Page({ count, onClick }) {
  return (
    <div>
      <Button onClick={() => onClick()}>
        Click me! (
        {count}
        )
      </Button>
      <div>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <Button key={i} onClick={() => onClick(i)}>{i}</Button>
          ))
        }
      </div>
    </div>
  );
}

function App() {
  const [state, setState] = useState({ count: 0 });
  const { count } = state;

  function handleClick(number = 1) {
    setState({
      count: count + number,
    });
  }

  return (
    <Page count={count} onClick={(number) => handleClick(number)} />
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
