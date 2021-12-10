import Button from './button';

const numbers = [1, 2, 3, 4, 5];

export default function Buttons({ onClick }) {
  return (
    <div>
      {numbers.map((i) => (
        <Button
          key={i}
          onClick={() => { onClick(i); }}
        >
          {i}
        </Button>
      ))}
    </div>
  );
}
