import React from 'react';

const Buttons = ({ onClick }) => (
  <div>
    {[1, 2, 3, 4, 5].map((i) => (
      <button key={i} type='button' onClick={() => onClick(i)}>
        {i}
      </button>
    ))}
  </div>
);

export default Buttons;
