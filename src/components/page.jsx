import Counter from './counter';
import Buttons from './buttons';

function Page({ count, onClick, onNumberClick }) {
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

export default Page;
