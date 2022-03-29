export default function Counter({ children, setCount }) {
  function handleClick() {
    setCount((prevValue) => prevValue + 1);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      { children }
    </button>
  );
}
