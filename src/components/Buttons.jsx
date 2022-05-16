import React from 'react';

import Button from './Button';

const transformLabels = {
  1: '하나',
  2: '둘',
  3: '셋',
  4: '넷',
  5: '다섯',
};

export default function Buttons({ labels, onClick }) {
  return (
    <div style={{ marginTop: '1rem' }}>
      {labels.map((label) => (
        <Button key={label} onClick={() => onClick(label)}>{transformLabels[label]}</Button>
      ))}
    </div>
  );
}
