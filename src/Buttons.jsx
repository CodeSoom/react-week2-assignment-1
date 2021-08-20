import Button from './Button';

export default function Buttons({ count, onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button key={i} count={count} onClick={() => onClick(i)}>
          {i}
        </Button>
      ))}
    </p>
  );
}
