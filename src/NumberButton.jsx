export default function NumberButton({
  number,
  handleNumberButton,
}) {
  return (
    <button
      type="button"
      onClick={() => handleNumberButton(number)}
    >
      {number}
    </button>
  );
}
