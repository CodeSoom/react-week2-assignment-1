import React from "react";

import Counter from "./Counter";
import NumberButtons from "./NumberButtons";

export default function CounterPage({ count, buttonClick }) {
    return (
        <div>
          <p>Counter</p>
          <Counter
            count={count}
            buttonClick={buttonClick}
          />
          <NumberButtons buttonClick={buttonClick} />
        </div>
      );
}