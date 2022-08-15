export default function NumberButton({ children, onClickButton }) {
  return (
    <button type="button" onClick={() => onClickButton(children)}>
      {children}
    </button>
  );
}
