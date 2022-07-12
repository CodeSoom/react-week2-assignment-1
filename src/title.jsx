import React, { memo } from 'react';

export function AppName({ text }) {
  return <h2>{text}</h2>;
}

export const MemoizedAppName = memo(AppName);
