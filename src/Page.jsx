import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

export default ({ counter, onClickPlusCount, onClickNumber }) => (
  <div>
    <h2>Counter</h2>
    <Button
      count={counter}
      onClick={onClickPlusCount}
    />
    <br />
    <br />
    <Buttons handleClickNumber={onClickNumber} />
  </div>
);
