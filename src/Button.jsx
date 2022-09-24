export default function Button({ value, onClick }) {
  return (
    <button type="button" onClick={() => onClick(value)}>
      {value}
    </button>
  );
}
