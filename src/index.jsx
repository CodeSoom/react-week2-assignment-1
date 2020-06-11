import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';
import CounterButtons from './components/CounterButtons';


function App() {
  const buttonList = [1, 2, 3, 4, 5];
  const baseIncreasement = 1;
  const [state, setState] = useState({
    count: 0,
  });
  const { count } = state;

  const handleClick = (increasement = 1) => {
    setState({
      count: count + increasement,
    });
  };

  return (
    <div>
      <Button
        buttonText={`Click me ! ${count}`}
        onClick={() => handleClick(baseIncreasement)}
      />
      <div>
        <CounterButtons
          buttonList={buttonList}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
