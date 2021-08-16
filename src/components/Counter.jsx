import React from "react";
import Button from "./Button";
import Page from "./Page";

function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me({count})
    </button>
  );
}

export default Counter;
