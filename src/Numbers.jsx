import React from 'react';

const Numbers = ({ onClick }) => (
  <p>
    {[1, 2, 3, 4, 5].map((i) => (
      <button type="button" key={i} onClick={() => onClick(i)}>
        {i}
      </button>
    ))}
  </p>
);

export default Numbers;
