import React, { useState } from 'react';

function CountClickButton() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton() {
    setState({
      count: count + 1,
    });
  }

  function handleSetButton(value) {
    if (count) {
      setState({
        count: count + value,
      });
      return;
    }

    setState({
      count: value,
    });
  }

  return (
    <div>
      <p>
        <button type="button" onClick={handleClickButton}>
          Click me ({count})
        </button>
      </p>
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <button type="button" key={i} onClick={() => handleSetButton(i)}>
            {i}
          </button>
        ))}
      </p>
    </div>
  );
}

export default CountClickButton;
