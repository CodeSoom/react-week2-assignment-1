import Button from './Button';

function Buttons({ onClick }) {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <p>
      {numbers.map((number) => (
        <Button key={number} onClick={() => onClick(number)}>
          {number}
        </Button>
      ))}
    </p>
  );
}
export default Buttons;
