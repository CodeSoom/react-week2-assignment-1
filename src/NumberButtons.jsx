import React from "react";

import NumberButton from "./NumberButton";

export default function NumberButtons({buttonClick}) {
    return (
      <p>
        {[1, 2, 3, 4, 5].map((number) => (
          <NumberButton key={number} buttonClick={buttonClick}>
            {number}
          </NumberButton>
        ))}
      </p>
    );
}