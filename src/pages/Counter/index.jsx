// 컴포넌트
import Buttons from '../../components/Buttons';
import ViewCount from '../../components/ViewCount';

function Counter({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <ViewCount count={count} onClick={() => onClick()} />
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Counter;
