import React from "react";
import Button from "./Button";

function KeypadButton({ count, onClick }) {
  return (
    <div>
      <Button count={count} onClick={() => onClick(count)}></Button>
    </div>
  );
}

export default KeypadButton;
