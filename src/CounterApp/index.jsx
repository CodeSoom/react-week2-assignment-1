import Title from './Title';
import ClickMe from './ClickMe';
import useCounter from './useCounter';
import IncreaseButtons from './IncreaseButtons';

const buttons = [...Array(5).keys()].map((number) => number + 1);

export default function CounterApp() {
  const { count, increment, increase } = useCounter(0);
  function handleClickClickMe() {
    increment();
  }

  function handleClickIncrease(amount) {
    increase(amount);
  }
  return (
    <main>
      <Title />
      <ClickMe count={count} onClick={handleClickClickMe} />
      <IncreaseButtons buttons={buttons} onClick={handleClickIncrease} />
    </main>
  );
}
