import ClickMe from './Buttons/ClickMe';
import NumberButtons from './Buttons/NumberButtons';

export default function CounterPage({ count, onButtonClick }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMe
        count={count}
        onButtonClick={onButtonClick}
      />
      <NumberButtons onButtonClick={onButtonClick} />
    </div>
  );
}
