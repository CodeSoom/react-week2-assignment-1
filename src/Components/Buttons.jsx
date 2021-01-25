import React from 'react';

function Buttons({ count, onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <button key={i} type="button" onClick={() => onClick(count + i)}>
          {i}
        </button>
      ))}
    </p>
  );
}

export default Buttons;
