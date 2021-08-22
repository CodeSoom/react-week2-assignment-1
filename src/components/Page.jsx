import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick, onClickNumber }) {
  return (
    <div>
      <p>Hello, world!!!</p>
      <p>Hi!</p>
      <Counter count={count} onClick={onClick} />
      <Buttons onClickNumber={onClickNumber} />
    </div>
  );
}
