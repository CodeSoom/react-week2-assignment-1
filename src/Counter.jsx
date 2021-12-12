import Button from './Button';

export default function Counter({ count, onClick }) {
  const number = 1;

  return (
    <Button
      onClick={() => onClick(number)}
    >
      Click me!
      (
      {count}
      )
    </Button>
  );
}
