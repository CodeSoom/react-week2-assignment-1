export default function ClickMeButton({
  count,
  onClickButton,
}) {
  return (
    <div>
      <button
        type="button"
        onClick={() => onClickButton(1)}
      >
        Click Me!
        (
        {count}
        )
      </button>
    </div>
  );
}
