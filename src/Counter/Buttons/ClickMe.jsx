export default function ClickMe({ count, onClickButton }) {
  return (
    <button type="button" onClick={() => onClickButton(1)}>
      Click me!
      (
      { count }
      )
    </button>
  );
}
