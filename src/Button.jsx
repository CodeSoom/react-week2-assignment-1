export default function Button({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click me! (
      {count}
      )
    </button>
  );
}
