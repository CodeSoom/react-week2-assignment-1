import Button from './Button';

export default function CurrentCountButton({ count, onClick }) {
  return (
    <p>
      <Button onClick={() => onClick(1)}>{`Click me! (${count})`}</Button>
    </p>
  );
}
