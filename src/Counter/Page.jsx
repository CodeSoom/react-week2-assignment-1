import ClickMe from './Buttons/ClickMe';
import NumberButtons from './Buttons/NumberButtons';

export default function CounterPage({ count, onClickButton }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMe
        count={count}
        onClickButton={onClickButton}
      />
      <NumberButtons onClickButton={onClickButton} />
    </div>
  );
}
