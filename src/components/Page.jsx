import Counter from './Counter';
import Buttons from './Buttons';

const TITLE = 'Counter';

export default function Page({ count, onClickCounter, onClickNumber }) {
  return (
    <div>
      <p>{title}</p>
      <Counter
        count={count}
        onClick={onClickCounter}
      />
      <Buttons onClickNumber={onClickNumber} />
    </div>
  );
}
