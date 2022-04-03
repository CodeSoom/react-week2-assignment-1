export default function Counter({ count, handleClick }) {
  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Click me!
      (
      { count }
      )
    </button>
  );
}
