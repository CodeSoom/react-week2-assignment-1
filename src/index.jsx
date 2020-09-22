import React, { useState } from 'react';
import ReactDom from 'react-dom';

import Buttons from './Buttons';

function App() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  const handleClick = () => {
    setState({
      count: count + 1,
    });
  };

  const handleClickNumber = (value) => {
    setState({
      count: count + value,
    });
  };

  return (
    <div>
      <p>Counter</p>
      <p>
        <button type="button" onClick={handleClick}>
          Click me!(
          {count}
          )
        </button>
      </p>
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

ReactDom.render(<App />, document.getElementById('app'));
