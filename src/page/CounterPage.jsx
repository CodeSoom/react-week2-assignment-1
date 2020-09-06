import React from 'react';

import Button from '../components/Button';
import CounterButtons from '../components/CounterButtons';

export default function CounterPage({ onClick, buttons, count }) {
  const BaseIncreasement = 1;
  return (
    <div>
      <Button onClick={() => onClick(BaseIncreasement)}>
        {`Click me ! (${count})`}
      </Button>
      <div>
        <CounterButtons
          buttons={buttons}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
