import React from 'react';

import NumberButton from './NumberButton';

function NumberButtonList({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <NumberButton
          key={i.toString()}
          value={i}
          onClick={onClick}
        />
      ))}
    </p>
  );
}

export default NumberButtonList;
