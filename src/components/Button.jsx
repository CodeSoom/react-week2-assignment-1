import React from 'react';

function Button({ onClick }) {
  return [1, 2, 3, 4, 5].map((i) => (
    <button type="button" key={i} onClick={() => onClick(i)}>
      {i}
    </button>
  ));
}

export default Button;
