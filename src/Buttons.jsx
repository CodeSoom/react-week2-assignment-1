import React from 'react';

export default function Buttons({ labels }) {
  return (
    <p>
      {
        labels.map((label) => <Button key={label}>{label}</Button>)
      }
    </p>
  );
}