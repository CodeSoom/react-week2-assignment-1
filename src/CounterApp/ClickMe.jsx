/* eslint-disable react/prop-types */
import React from 'react';

/**
 * @export
 * @param {{ count: number, onClick: () => void }} props
 * @return {import('react').ReactElement}
 */
export default function ClickMe({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click Me!
      (
      {count}
      )

    </button>
  );
}
