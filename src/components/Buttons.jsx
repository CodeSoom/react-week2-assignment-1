import Button from './Button';

export default function Buttons({ onClick }) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((i) => (
        <Button
          key={i}
          onClick={onClick}
        >
          {i}
        </Button>
      ))}
    </p>
  );
}
