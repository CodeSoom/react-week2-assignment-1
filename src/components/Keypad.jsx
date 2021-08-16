import React from "react";
import KeypadButton from "./KeypadButton";

function Keypad({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map(i => (
        <KeypadButton key={i} count={i} onClick={onClick}>
          {i}
        </KeypadButton>
      ))}
    </p>
  );
}

export default Keypad;
