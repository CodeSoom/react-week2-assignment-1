import Button from './button';

const array = [1, 2, 3, 4, 5];

export default function Buttons({ onClick }) {
  return (
    <div>
      {array.map((i) => (
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
