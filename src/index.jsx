import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Buttons from './components/Buttons';


function App() {
  const buttonList = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (v) => {
    setState({
      count: count + v,
    });
  };

  return (
    <div>
      Click me !(
      {count}
      )
      <Buttons
        buttonList={buttonList}
        onClick={handleClick}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
