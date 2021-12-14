import Button from './Button';

export default function Counter({ count, onClick }) {
  return (
    <Button type="button" onClick={() => onClick(1)}>
      Click me! ({count})
    </Button>
  );
}
