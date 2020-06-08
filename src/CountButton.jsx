import React from 'react';


function CountButton({ number, handleClickMe }) {
  return (
    <button type="button" onClick={() => handleClickMe(number)}>{number}</button>
  );
}


export default CountButton;
