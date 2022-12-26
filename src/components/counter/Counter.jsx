import Buttons from './Buttons';
import Button from './Button';

const Counter = ({ count, onIncreaseCount }) => (
  <div>
    <Button
      onIncrease={() => onIncreaseCount(1)}
    >
      Click me!
      (
      {count}
      )
    </Button>

    <Buttons
      onIncrease={onIncreaseCount}
    />
  </div>
);

export default Counter;
