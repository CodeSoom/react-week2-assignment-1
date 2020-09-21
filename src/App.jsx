import React from 'react';
import ClickMeButton from './components/ClickMeButton';
import NumberButton from './components/NumberButton';

function App() {
  function handleClick(value) {
    console.log(value);
  }

  return (
    <div>
      <p>Counter</p>
      <p>
        <ClickMeButton value={0} />
      </p>
      <p>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <NumberButton
              value={i}
              key={i}
              handleClick={() => handleClick(i)}
            />
          ))
        }
      </p>
    </div>
  );
}

export default App;
