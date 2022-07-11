import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import RenderButton from './RenderButton';
import NumberButton from './NumberButton';

function App() {
  const [render, setRender] = useState(0);

  /** 값을 합하는 이벤트 */
  const handleAddValue = (addValue) => {
    setRender(render + addValue);
  };

  /** 숫자 버튼 클릭 시 해당 값을 가져와 값을 합하는 이벤트 */
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
