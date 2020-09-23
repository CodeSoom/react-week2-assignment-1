import React from 'react';

const CountController = ({ difference, onClick }) => (
  <button type="button" onClick={onClick}>
    {difference}
  </button>
);

export default CountController;
