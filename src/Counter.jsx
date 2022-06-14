export default function Counter({ count, onClick }) {
  return (
    <button type="button" onClick={onClick} className="counter">
      Click me!
      (
      { count }
      )
    </button>
  );
}
