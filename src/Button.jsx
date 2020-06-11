import React from 'react';

const Button = (props) => {
  const { value, onClick } = props;
  const component = <button type="button" onClick={onClick}>{value}</button>;

  return (<span>{component}</span>);
};

export default Button;
