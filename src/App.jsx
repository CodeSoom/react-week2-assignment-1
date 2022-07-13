import React, { useState } from 'react';

import MainButton from './MainButton';
import NumberButton from './NumberButton';

function App() {
  const [sumResultValue, setSumResultValue] = useState(0);

  /** 값을 합하는 이벤트 */
  const handleAddValue = (addValue) => {
    setSumResultValue(sumResultValue + addValue);
  };

  /** 숫자 버튼 클릭 시 해당 값을 가져와 값을 합하는 이벤트 */
  const handleGetUpdateValue = (currentValue) => {
    handleAddValue(currentValue);
  };

  return (
    <div>
      <p>Counter</p>
      <MainButton count={sumResultValue} updateValue={1} handleClick={handleAddValue} />
      <br />
      <br />
      <div>
        {[1, 2, 3, 4, 5].map((i) => (
          <NumberButton handleClick={handleGetUpdateValue} key={`number-${i}`} value={i} />
        ))}
      </div>
      <br />
      <br />
      <button type="button" onClick={() => setSumResultValue(0)}>
        reset
      </button>
    </div>
  );
}

export default App;
