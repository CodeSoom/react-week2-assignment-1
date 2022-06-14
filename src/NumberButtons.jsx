import NumberButton from './NumberButton';

const numbers = [1, 2, 3, 4, 5];

const NumberButtons = ({ onClick }) => (
  <p>
    {numbers.map((i) => (
      <NumberButton
        key={i}
        number={i}
        onClick={onClick}
      />
    ))}
  </p>
);

export default NumberButtons;
