import React from 'react';

const CounterController = ({ difference, onClick }) => (
  <button type="button" onClick={() => onClick({ difference })}>
    {difference}
  </button>
);

export default CounterController;
