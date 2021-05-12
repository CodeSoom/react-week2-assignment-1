import React from 'react';
import { func, number } from 'prop-types';
import Button from './Button';
import Buttons from './Buttons';

const Page = ({ counter, onClickBtn, onClickNumberBtn }) => (
  <div>
    <h2>Counter</h2>
    <Button count={counter} handleClickBtn={onClickBtn} />
    <br />
    <br />
    <Buttons handleClickNumberBtn={onClickNumberBtn} />
  </div>
);

Page.propTypes = {
  counter: number.isRequired,
  onClickBtn: func.isRequired,
  onClickNumberBtn: func.isRequired,
};

export default Page;
