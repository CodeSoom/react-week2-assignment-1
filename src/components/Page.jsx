import Counter from './Counter';
import Buttons from './Buttons';

export default function Page({ count, onClick }) {
  return (
    <>
      <p>Counter</p>
      <Counter count={count} onClick={() => onClick(1)} />
      <Buttons onClick={onClick} />
    </>
  );
}
