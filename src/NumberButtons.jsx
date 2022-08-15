import NumberButton from './NumberButton';

const { log } = console;

export default function NumberButtons({
  onClickButton,
}) {
  log(onClickButton);
  return (
    <p>
      {[1, 2, 3, 4, 5].map((number) => (
        <NumberButton
          key={number}
          number={number}
          onClickButton={onClickButton}
        />
      ))}
    </p>
  );
}
