export default function ClickMe({ count, buttonClick }) {
  return (
    <button type="button" onClick={() => buttonClick(1)}>
      Click me!
      (
      { count }
      )
    </button>
  );
}
