import React from 'react';

import Button from './Button';

export default ({ buttons, onClick }) => (
  <div>
    {buttons.map((n) => <Button key={n} onClick={() => onClick(n)}>{n}</Button>)}
  </div>
);
