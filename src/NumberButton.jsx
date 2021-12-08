function NumberButton({
  onClick,
  value,
}) {
  return <button type="button" onClick={onClick}>{value}</button>;
}

export default NumberButton;
