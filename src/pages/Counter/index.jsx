import Buttons from '../../components/Buttons';
import ViewCount from '../../components/ViewCount';

function Counter({ count, onClick, createNumbers }) {
  return (
    <div>
      <h1>Counter</h1>
      <ViewCount count={count} onClick={onClick} />
      <Buttons onClick={onClick} createNumbers={createNumbers} />
    </div>
  );
}

export default Counter;
