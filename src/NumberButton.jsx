export default function NumberButton({ number, clickHandler }) {
  return (
    <button type="button" onClick={clickHandler} style={{ margin: '0 5px 0 0' }}>
      {number}
    </button>
  );
}
