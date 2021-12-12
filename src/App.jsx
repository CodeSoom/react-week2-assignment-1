import Title from './Title';
import ClickMeButton from './ClickMeButton';
import NumberButtons from './NumberButtons';

export default function App() {
  const [state, setState] = useStatee(0);
  const { count } = state;

  function handleClick(value = 1) {
    setState({
      count: count + value,
    });
  }

  return (
    <>
      <Title />
      <ClickMeButton count={count} onClick={handleClick} />
      <NumberButtons onClick={handleClick} />
    </>
  );
}
