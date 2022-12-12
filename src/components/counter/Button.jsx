const Button = ({ onIncrease, children }) => (
  <li>
    <button type="button" onClick={onIncrease}>
      {children}
    </button>
  </li>
);

export default Button;
