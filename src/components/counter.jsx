export default function Counter({ count, onIncreaseByNumber }) {
  return (
    <button type="button" onClick={() => onIncreaseByNumber(1)}>
      Click me!
      (
      {count}
      )
    </button>
  );
}
