function Button({ number, onClick }) {
  return (
    <button onClick={() => onClick(number)} type="button">{number}</button>
  );
}

export default Button;
