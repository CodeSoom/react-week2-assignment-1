import React from 'react';

import Button from './Button';
import Buttons from './Buttons';

function Page({
  count,
  onButtonClick,
  onButtonsClick,
}) {
  return (
    <>
      <p>Counter</p>
      <p>
        <Button
          count={count}
          onClick={onButtonClick}
        />
      </p>
      <Buttons
        onClick={onButtonsClick}
      />
    </>
  );
}

export default Page;
