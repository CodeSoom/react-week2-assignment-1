import React from 'react';

import Button from '../common/Button';

function Reset({ onClick }) {
  return (
    <Button onClick={() => onClick(0)}>Reset</Button>
  );
}

export default Reset;
