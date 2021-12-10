import Button from './Button';

const NUMBERS = [1, 2, 3, 4, 5];

export default function Buttons({ onClickNumber }) {
  return (
    <p>
      {NUMBERS.map((number) => (
        <Button key={number} onClick={() => onClickNumber(number)}>
          {number}
        </Button>
      ))}
    </p>
  );
}
