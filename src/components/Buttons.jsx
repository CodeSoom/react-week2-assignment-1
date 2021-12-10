import Button from './Button';

export default function Buttons({ onClick }) {
  const NUMBERS = [1, 2, 3, 4, 5];

  return (
    <p>
      {NUMBERS.map((number) => (
        <Button key={number} onClick={() => onClick(number)}>
          {number}
        </Button>
      ))}
    </p>
  );
}
