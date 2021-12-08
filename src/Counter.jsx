import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function Counter({ count, clickHandler }) {
  return (
    <>
      <h1>Counter</h1>
      <ClickMeButton count={count} clickHandler={() => clickHandler(1)} />
      <NumberButtons clickHandler={clickHandler} />
    </>
  );
}
