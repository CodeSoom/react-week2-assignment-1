import React from 'react';
import Button from './Button';

function Buttons({ labels, onClick }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      {labels.map((label) => (
        <Button key={label} onClick={onClick}>{label}</Button>
      ))}
    </div>
  );
}

export default Buttons;
