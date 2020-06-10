import React from 'react';

import CountDisplayButton from './CountDisplayButton';
import NumberButtons from './NumberButtons';

export default function Counter({ count, handleCount }) {
  return (
    <>
      <p>
        <CountDisplayButton
          count={count}
          onClick={() => handleCount(count + 1)}
        />
      </p>
      <p>
        <NumberButtons
          onClick={(increment) => handleCount(count + increment)}
        />
      </p>
    </>
  );
}
