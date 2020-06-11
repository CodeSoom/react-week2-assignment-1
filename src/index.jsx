import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Button from './components/Button';


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
      Click me !(
      {count}
      )
      <div>
        {buttonList.map(
          (buttonText) => (
            <Button
              key={buttonText}
              buttonText={buttonText}
              onClick={() => handleClick(buttonText)}
            />
          ),
        )}
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
