import React, { memo } from 'react';

export function Title({ text }) {
  return <h2>{text}</h2>;
}

export const MemoizedTitle = memo(Title);
