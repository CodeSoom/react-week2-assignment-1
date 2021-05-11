import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function CounterContainer({ count, increaseCount }) {
  const steps = [1, 2, 3, 4, 5];

  return (
    <p>
      <h1>Counter</h1>

      <p>
        <Button
          value={`Click me! (${count})`}
          onClick={() => increaseCount(1)}
        />
      </p>

      {steps.map((value) => (
        <Button
          value={value}
          onClick={() => increaseCount(value)}
        />
      ))}
    </p>
  );
}

CounterContainer.propTypes = {
  count: PropTypes.number.isRequired,
  increaseCount: PropTypes.func.isRequired,
};
