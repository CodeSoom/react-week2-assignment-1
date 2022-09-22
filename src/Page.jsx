import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({
  count, onClick, buttonList, handleClickDirectPlus,
}) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons buttonList={buttonList} handleClickDirectPlus={handleClickDirectPlus} />
    </div>
  );
}
