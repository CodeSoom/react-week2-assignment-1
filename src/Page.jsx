import React from 'react';
import Button from './Button';
import Buttons from './Buttons';

// eslint-disable-next-line react/prop-types
const Page = ({ counter, onClickBtn, onClickNumberBtn }) => (
  <div>
    <h2>Counter</h2>
    <Button counter={counter} onHandleClickBtn={onClickBtn} />
    <br />
    <br />
    <Buttons onHandleClickNumberBtn={onClickNumberBtn} />
  </div>
);

export default Page;
