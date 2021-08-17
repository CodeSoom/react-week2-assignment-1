import React from "react";
import Button from "./Button";

function Counter({ count, onClick }) {
  return (
    <div>
      <Button count={count} onClick={() => onClick(1)}></Button>
    </div>
  );
}

export default Counter;
