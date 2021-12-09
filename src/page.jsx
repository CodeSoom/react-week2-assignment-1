import Buttons from './buttons';
import Counter from './counter';

export default function Page({ count, onClick, onClickButton }) {
  return (
    <div>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onClickButton={onClickButton} />
    </div>
  );
}
