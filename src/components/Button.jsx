export default function Button({ number, onClick }) {
  return (
    <button
      type="button"
      onClick={() => onClick({ number })}
    >
      {number}
    </button>
  );
}
