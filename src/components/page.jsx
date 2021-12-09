import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick, onNumberClick }) {
  return (
    <div>
      <p>- Counter -</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClick={onNumberClick}
      />
    </div>
  );
}
