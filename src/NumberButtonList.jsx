import NumberButton from './NumberButton';

export default function NumberButtonList({ onClick }) {
  return (
    <div className="number-button-list">
      (
      {
        [1, 2, 3, 4, 5].map((number) => (
          <NumberButton key={number} number={number} onClick={() => onClick(number)} />
        ))
      }
      )
    </div>
  );
}
