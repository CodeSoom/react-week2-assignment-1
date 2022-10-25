function NumberButton({ children, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick(children)}
    >
      {children}

    </button>
  );
}

export default NumberButton;
