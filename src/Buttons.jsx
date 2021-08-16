import React from 'react';

function Button({ children }) {
  return <button type="button">{children}</button>;
}

export default function Buttons({ labels }) {
  return (
    <p>
      {
        labels.map((label) => <Button key={label}>{label}</Button>)
      }
    </p>
  );
}