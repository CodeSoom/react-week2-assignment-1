import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function RenderButton({ count, handleClick, updateValue }) {
  return (
    <button type="button" onClick={() => handleClick(updateValue)} value={count}>
      Click Me! ({count})
    </button>
  );
}

function NumberButton({ handleClick }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((i) => (
        <button type="button" key={`number-${i}`} value={i} onClick={(e) => handleClick(e)}>
          {i}
        </button>
      ))}
    </div>
  );
}

function App() {
  const [render, setRender] = useState(0);

  const handleAddValue = (addValue) => {
    setRender(render + addValue);
  };

  const handleGetUpdateValue = (e) => {
    const value = Number(e.target.value);
    handleAddValue(value);
  };

  return (
    <div>
      <p>Counter</p>
      <RenderButton count={render} updateValue={1} handleClick={handleAddValue} />
      <br />
      <br />
      <NumberButton handleClick={handleGetUpdateValue} />
      <br />
      <br />
      <button type="button" onClick={() => setRender(0)}>
        reset
      </button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('app'));
