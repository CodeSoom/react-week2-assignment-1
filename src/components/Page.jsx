import React from 'react';

import Buttons from './Buttons';
import Button from './Button';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Button count={count} onClick={onClick} />
      <Buttons count={count} onClick={onClick} />
    </div>
  );
}
