import NumberButton from './NumberButton';

export default function NumberButtons({
  handleNumberButton,
}) {
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton
          key={number}
          number={number}
          handleNumberButton={handleNumberButton}
        />
      ))}
    </p>
  );
}
