import React from 'react';

import Button from './Button';

function Buttons({ onClick }) {
  return (
    <p>
      <Button onClick={onClick} />
    </p>
  );
}

export default Buttons;
