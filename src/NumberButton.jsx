export default function NumberButton({
  number,
  onClickButton,
}) {
  return (
    <button
      type="button"
      onClick={() => onClickButton(number)}
    >
      {number}
    </button>
  );
}
