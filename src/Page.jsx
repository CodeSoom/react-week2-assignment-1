import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter count={count} onClick={onClick} />
      <p>
        <Buttons />
      </p>
    </div>
  );
}

export default Page;
