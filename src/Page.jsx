import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

function Page({
  count,
  onClick,
}) {
  return (
    <>
      <p>Counter</p>
      <p>
        <Button
          count={count}
          onClick={onClick}
        />
      </p>
      <Buttons
        onClick={onClick}
      />
    </>
  );
}

export default Page;
