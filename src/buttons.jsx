import Button from './button';

const buttonValue = [1, 2, 3, 4, 5];

export default function Buttons({ onClick }) {
  return (
    <div>
      {buttonValue.map((i) => (
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
