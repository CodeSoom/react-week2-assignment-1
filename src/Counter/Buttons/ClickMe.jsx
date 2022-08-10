export default function ClickMe({ count, onButtonClick }) {
  return (
    <button type="button" onClick={() => onButtonClick(1)}>
      Click me!
      (
      { count }
      )
    </button>
  );
}
