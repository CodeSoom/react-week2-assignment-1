import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClickCounter, onClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClickCounter}
      />
      <Buttons onClickNumber={onClickNumber} />
    </div>
  );
}
