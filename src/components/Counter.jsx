import React from 'react';

import ClickMe from './ClickMe';
import CounterButtons from './CounterButtons';

export default ({ buttons, count, onClick }) => (
  <>
    <ClickMe count={count} onClick={onClick} />
    <CounterButtons buttons={buttons} onClick={onClick} />
  </>
);
