import React from 'react';

function ViewCounter({ count, onClick }) {
  return (
    <>
      <div>Counter</div>
      <button type="button" onClick={onClick}>
        Click Me! (
        {count}
        )
      </button>
      <p>
        {
          [1, 2, 3, 4, 5].map((i) => (
            <button type="button" key={i}>{i}</button>
          ))
        }
      </p>
    </>
  );
}


export default ViewCounter;
