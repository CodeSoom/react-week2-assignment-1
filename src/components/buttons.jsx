import Button from './Button';

export default function Buttons({ onClick }) {
  const NUMBER_BUTTONS = [1, 2, 3, 4, 5];

  return (
    <p>
      {NUMBER_BUTTONS.map((number) => (
        <Button key={number} number={number} onClick={onClick} />
      ))}
    </p>
  );
}
