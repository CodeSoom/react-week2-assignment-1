import Button from './Button';

export default function Buttons({ onClickNumber }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} onClick={() => onClickNumber(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}
