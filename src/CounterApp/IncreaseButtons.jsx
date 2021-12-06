/* eslint-disable react/prop-types */
import React from 'react';

/**
 * @export
 * @param {{
 *   buttons: number[],
 *   onClick: (count: number) => void,
 * }} props
 * @return {import('react').ReactElement}
 */
export default function IncreaseButtons({
  buttons = [],
  onClick,
}) {
  return (
    <ul>
      {buttons.map((button) => (
        <li key={button}>
          <button type="button" onClick={() => onClick(button)}>
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
}
