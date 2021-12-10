const Button = ({ type, children, onClick }) => (
  <button type={type === 'submit' ? 'submit' : 'button'} onClick={onClick}>
    {children}
  </button>
);

export default Button;
