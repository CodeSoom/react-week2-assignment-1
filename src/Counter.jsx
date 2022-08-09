import React from "react";

export default function Counter({ count, buttonClick }) {
    return (
      <button type="button" onClick={() => buttonClick(1)}>
        Click me!
        (
        { count }
        )
      </button>
    );
}