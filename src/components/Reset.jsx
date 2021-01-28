import React from 'react';

import Button from '../commons/Button';

function Reset({ count, onClick }) {
  return (
    <Button onClick={() => onClick(-count)}>Reset</Button>
  );
}

export default Reset;
