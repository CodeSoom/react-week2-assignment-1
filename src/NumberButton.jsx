const NumberButton = ({ number, onClick }) => (
  <button
    type="button"
    onClick={() => onClick(number)}
  >
    {number}
  </button>
);

export default NumberButton;
