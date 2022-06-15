import Buttons from './Buttons';
import Counter from './Counter';

export default function Page({ onClick, count }) {
  return (
    <div>
      <Counter onClick={onClick} count={count} />
      <Buttons onClick={onClick} count={count} />
    </div>
  );
}
