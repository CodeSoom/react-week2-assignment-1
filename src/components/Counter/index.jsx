import React from 'react';

import ClickMe from '../ClickMe';
import CounterButtonGroup from '../CounterButtonGroup';

export default ({ buttons, count, onClick }) => (
  <>
    <ClickMe count={count} onClick={onClick} />
    <CounterButtonGroup buttons={buttons} onClick={onClick} />
  </>
);
