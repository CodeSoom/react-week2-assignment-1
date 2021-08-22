export default function Counter({ count, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ number: 1 })}
    >
      Click me!
      (
      {count}
      )
    </button>
  );
}
