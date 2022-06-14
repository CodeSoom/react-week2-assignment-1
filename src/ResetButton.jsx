/* eslint-disable linebreak-style */
import React from 'react';

export default function ResetButton({ onClick }) {
  return (
    <button type="button" className="reset-button" onClick={onClick}>
      reset
    </button>
  );
}
