export default function Button({ value, setCount }) {
  function handleClick() {
    setCount((prevValue) => prevValue + parseInt(value, 10));
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      { value }
    </button>
  );
}
