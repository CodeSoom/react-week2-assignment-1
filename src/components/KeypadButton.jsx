import React from "react";

function KeypadButton({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(count)}>
      {count}
    </button>
  );
}

export default KeypadButton;
