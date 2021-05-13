import React from 'react';
import { func, number } from 'prop-types';
import Button from './Button';
import Buttons from './Buttons';

const Page = ({ counter, onClickPlusCount, onClickNumber }) => (
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

Page.propTypes = {
  counter: number.isRequired,
  onClickPlusCount: func.isRequired,
  onClickNumber: func.isRequired,
};

export default Page;
