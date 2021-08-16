import React from "react";
import Counter from "./Counter";
import Button from "./Button";

function Page({ count, onClick }) {
  return (
    <div>
      <p>hello world</p>
      <p>hi</p>
      <Counter count={count} onClick={() => onClick()} />
    </div>
  );
}

export default Page;
