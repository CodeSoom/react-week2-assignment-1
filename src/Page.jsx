import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

export default function Page({ count, onClickOne, onClickNumbers }) {
  return (
    <>
      <p>Counter</p>
      <Button count={count} onClickOne={onClickOne} />
      <Buttons onClickNumbers={onClickNumbers} />
    </>
  );
}
