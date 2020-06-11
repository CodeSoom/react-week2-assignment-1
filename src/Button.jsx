import React from 'react';

export default function Button ({ value, onClick }) {
  return (<span><button type="button" onClick={onClick}>{value}</button></span>);
};


