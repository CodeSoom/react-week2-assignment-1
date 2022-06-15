export default function Button({ buttonNumber, onClick }) {
  return (
    <button
      type="button"
      key={buttonNumber}
      onClick={() => onClick(buttonNumber)}
    >
      {buttonNumber}
    </button>
  );
}
