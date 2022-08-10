export default function ClickMeButton({
  count,
  handleClickMe,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => handleClickMe()}
      >
        Click Me!
        (
        {count}
        )
      </button>
    </div>
  );
}
