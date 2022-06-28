export default function CountButton({ onClick, count }) {
  return (
    <button type="button" onClick={onClick}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
