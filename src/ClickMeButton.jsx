export default function ClickMeButton({ count, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      Click Me! (
      {count}
      )
    </button>
  );
}
