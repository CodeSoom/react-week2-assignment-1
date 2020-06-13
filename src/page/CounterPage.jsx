import React from 'react';

import Button from '../components/Button';
import CounterButtons from '../components/CounterButtons';

export default function CounterPage({ onClick, buttonList, count }) {
  const BaseIncreasement = 1;
  return (
    <div>
      <Button onClick={() => onClick(BaseIncreasement)}>
        {`Click me ! ${count}`}
      </Button>
      <div>
        <CounterButtons
          buttonList={buttonList}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
