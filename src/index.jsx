import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import CounterPage from './page/CounterPage';


function App() {
  const buttonList = [1, 2, 3, 4, 5];
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (increasement) => {
    setState({
      count: count + increasement,
    });
  };

  return (
    <div>
      <CounterPage
        count={count}
        onClick={handleClick}
        buttonList={buttonList}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
