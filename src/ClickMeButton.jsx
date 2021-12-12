export default function ClickMeButton({ count, clickHandler }) {
  return (
    <div style={{ margin: '0 0 10px 0' }}>
      <button type="button" onClick={clickHandler}>
        Click me! (
        {count}
        )
      </button>
    </div>
  );
}
