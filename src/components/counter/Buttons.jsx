import Button from './Button';

const Buttons = ({ onIncrease }) => {
  const incrementValues = [1, 2, 3, 4, 5];

  return (
    <ul className="counterBtns">
      {incrementValues.map((incrementValue) => (
        <Button key={incrementValue} onIncrease={() => onIncrease(incrementValue)}>
          {incrementValue}
        </Button>
      ))}
    </ul>
  );
};

export default Buttons;
