export default function NumberButton({ onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
