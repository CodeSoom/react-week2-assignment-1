import React from 'react';

function Button({ text, onClick }) {
  return (<button type="button" onClick={() => onClick()}>{text}</button>);
}
export default Button;
