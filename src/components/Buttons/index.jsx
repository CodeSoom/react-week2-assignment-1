import Button from '../Button';

function Buttons({ createNumbers, onClick }) {
  return (
    <p>
      {createNumbers(5).map((i) => (
        <Button onClick={onClick} number={i} key={i}>{i}</Button>
      ))}
    </p>
  );
}

export default Buttons;
