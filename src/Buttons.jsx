/* @jsx React.createElement */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './Button';

function Buttons() {
  return (
    <>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i}>{i}</Button>
      ))}
    </>
  );
}

export default Buttons;
