import Title from './Title';
import ClickMe from './ClickMe';
import useCounter from './useCounter';
import IncreaseButtons from './IncreaseButtons';

export default function CounterApp() {
  const { count, increment, increase } = useCounter({ count: 0 });
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
      <IncreaseButtons onClick={handleClickIncrease} />
    </main>
  );
}
