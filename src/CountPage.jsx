import { useState } from 'react';

export default function CountPage() {
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClickButton() {
    setState({
      ...state,
      count: count + 1,
    });
  }

  function handleSetButton(value) {
    setState({
      ...count,
      count: count + value,
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
