import React from "react";

function Button({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me({count})
    </button>
  );
}

export default Button;
