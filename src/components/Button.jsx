export default function Button({ value, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      { value }
    </button>
  );
}
