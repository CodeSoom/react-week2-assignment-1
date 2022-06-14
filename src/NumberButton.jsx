const NumberButton = ({ children, onClick }) => (
  <button type="button" onClick={onClick}>
    {children}
  </button>
);

export default NumberButton;
