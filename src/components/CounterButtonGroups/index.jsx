import React from 'react';

import Button from '../Button';

function CounterButtonGroups({ buttons, onClick }) {
  return (
    <div>
      {buttons.map((n) => <Button key={n} onClick={() => onClick(n)}>{n}</Button>)}
    </div>
  );
}

export default CounterButtonGroups;
