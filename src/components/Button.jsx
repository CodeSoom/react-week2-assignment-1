import React from "react";

export default function Button({ children, onClick }) {
  const style = {
    background: "#F00",
  };

  return (
    <button type="button" onClick={onClick} style={style}>
      {children}
    </button>
  );
}
