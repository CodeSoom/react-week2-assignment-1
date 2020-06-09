import React from 'react';
import CountDisplayButton from './CountDisplayButton';
import NumberButtons from './NumberButtons';

const CounterButtons = ({ count, onClick }) => (
  <>
    <p>
      <CountDisplayButton
        count={count}
        onClick={() => onClick(count + 1)}
      />
    </p>
    <p>
      <NumberButtons
        onClick={(increment) => onClick(count + increment)}
      />
    </p>
  </>
);

export default CounterButtons;
