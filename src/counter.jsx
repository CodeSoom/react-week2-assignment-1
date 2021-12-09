import Button from './button';

export default function Counter({ count, onClick }) {
  return (
    <Button
      onClick={onClick}
    >
      Click me
      (
      {count}
      )
    </Button>
  );
}
