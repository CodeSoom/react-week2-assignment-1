import React from 'react';
import ClickMe from '../ClickMe';
import CounterButtonGroups from '../CounterButtonGroups';

function Counter({ buttons, count, onClick }) {
  return (
    <>
      <ClickMe count={count} onClick={onClick} />
      <CounterButtonGroups buttons={buttons} onClick={onClick} />
    </>
  );
}

export default Counter;
