export default function CountNumberButton({ value, onClick }) {
  return (
    <button type="button" onClick={() => onClick(value)}>{value}</button>
  );
}
