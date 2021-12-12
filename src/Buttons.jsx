export default function Buttons({ onClickNumber }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((v) => (
        <button key={v} type="button" onClick={() => onClickNumber(v)}>{v}</button>
      ))}
    </div>
  );
}
