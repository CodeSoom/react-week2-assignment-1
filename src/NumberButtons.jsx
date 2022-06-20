import NumberButton from './NumberButton';

const NumberButtons = ({ numbers, onClick }) => (
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
