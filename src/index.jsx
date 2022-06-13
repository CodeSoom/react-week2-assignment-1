import React, { useCallback, useState } from 'react';
import ReactDom from 'react-dom';
import Button from './Button';

const INCREMENT_LIST = [1, 2, 3, 4, 5];

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback((increment) => {
    setCount((prev) => (prev + increment));
  }, [count]);

  return (
    <>
      <p>Counter</p>
      <Button onClick={() => handleClick(1)}>
        {`Click me (${count})`}
      </Button>
      <div>
        {
          INCREMENT_LIST.map((increment) => (
            <Button key={`increment-button-${increment}`} onClick={() => handleClick(increment)}>
              { increment }
            </Button>
          ))
        }
      </div>
    </>
  );
};
ReactDom.render(<App />, document.getElementById('app'));
