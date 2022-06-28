const Button = ({ children, onClick }) => (
  <button type="button" onClick={onClick || null}>
    {children || 'click!'}
  </button>
);

export default Button;
