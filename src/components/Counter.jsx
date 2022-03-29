export default function Counter({ count, setCount }) {
  function handleClick() {
    setCount((prevValue) => prevValue + 1);
  }

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
