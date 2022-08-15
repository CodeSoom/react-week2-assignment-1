import Button from './Button';

export default function Counter({ count, onClick }) {
  return (
    <p>
      <Button onClick={() => onClick(1)}>
        Click me!
        (
        { count }
        )
      </Button>
    </p>
  );
}
