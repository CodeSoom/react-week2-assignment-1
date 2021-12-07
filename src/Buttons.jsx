import React from 'react';

function Buttons({ count, setCount }) {
  function onClickNumbers(numbers) {
    setCount({ count: count + numbers });
  }

  return (
    <div>
      {[1, 2, 3, 4, 5].map((v) => (
        <button key={v} type="button" onClick={() => onClickNumbers(v)}>{v}</button>
      ))}

    </div>

  );
}

export default Buttons;
