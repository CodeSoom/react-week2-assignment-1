import Button from './Button';

const IncrementButtons = ({ numberList, onClick }) => (
  <div>
    {numberList.map((increment) => (
      <Button
        key={`increment-button-${increment}`}
        onClick={() => onClick(increment)}
      >
        {increment}
      </Button>
    ))}
  </div>
);

export default IncrementButtons;
