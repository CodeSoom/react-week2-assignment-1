export default function NumberButton({ children, onButtonClick }) {
  return (
    <button type="button" onClick={() => onButtonClick(children)}>
      {children}
    </button>
  );
}
