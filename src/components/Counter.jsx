export default function Counter({ onClick, count }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click me (
      {count}
      )
    </button>
  );
}
