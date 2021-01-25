import React from 'react';

function Buttons({ count, setFunction }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <button key={i} type="button" onClick={() => setFunction(count + i)}>
          {i}
        </button>
      ))}
    </p>
  );
}

export default Buttons;
