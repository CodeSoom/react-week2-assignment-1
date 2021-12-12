export default function ClickMeButton({ count, onClick }) {
  return (
    <button type="button" onClick={() => onClick(1)}>
      Click Me! (
      {count}
      )
    </button>
  );
}
