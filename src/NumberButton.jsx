import React from "react";

export default function NumberButton({ children, onClick }) {
    return (
      <button type="button" onClick={() => onClick(children)}>
        {children}
      </button>
    );
}