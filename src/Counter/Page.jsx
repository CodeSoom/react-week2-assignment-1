import ClickMe from './Buttons/ClickMe';
import NumberButtons from './Buttons/NumberButtons';

export default function CounterPage({ count, buttonClick }) {
  return (
    <div>
      <p>Counter</p>
      <ClickMe
        count={count}
        buttonClick={buttonClick}
      />
      <NumberButtons buttonClick={buttonClick} />
    </div>
  );
}
