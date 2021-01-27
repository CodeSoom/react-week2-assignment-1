import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <div>
      <p>
        (
        {count}
        )
      </p>
      <Button
        text="Click me"
        onClick={onClick}
      />
      <Buttons onClick={onClick} />
    </div>
  );
}
