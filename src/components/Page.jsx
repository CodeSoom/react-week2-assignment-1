import React from "react";
import Counter from "./Counter";
import Keypad from "./Keypad";

function Page({ count, onClick }) {
  return (
    <div>
      <p>hello world</p>
      <p>hi</p>
      <Counter count={count} onClick={onClick} />
      <Keypad onClick={onClick} />
    </div>
  );
}

export default Page;
