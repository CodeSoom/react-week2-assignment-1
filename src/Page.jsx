import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

function Page({ count, onClickOne, onClickNumbers }) {
  return (
    <>
      <p>Counter</p>
      <Button count={count} onClickOne={onClickOne} />
      <Buttons onClickNumbers={onClickNumbers} />
    </>
  );
}

export default Page;
