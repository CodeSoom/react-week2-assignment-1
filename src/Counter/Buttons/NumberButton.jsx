import React from "react";

export default function NumberButton({ children, buttonClick }) {
    return (
      <button type="button" onClick={() => buttonClick(children)}>
        {children}
      </button>
    );
}
