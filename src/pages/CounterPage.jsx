import Counter from '../components/Counter';
import Buttons from '../components/buttons/Buttons';

function CounterPage({ count, onClick, handleClickNumber }) {
  return (
    <div>
      <p>assignment 1</p>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons onClick={handleClickNumber} />
    </div>
  );
}

export default CounterPage;
