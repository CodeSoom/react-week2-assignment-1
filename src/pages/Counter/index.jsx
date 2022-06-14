// 컴포넌트
import Buttons from '../../components/Buttons';
import ViewCount from '../../components/ViewCount';

function Counter({ count, onClick }) {
  return (
    <div>
      <h1>Counter</h1>
      <ViewCount count={count} onClick={() => onClick()} />
      <Buttons onClick={onClick} />
    </div>
  );
}

export default Counter;
