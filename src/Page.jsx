import Title from './Title';
import Button from './Button';
import Numbers from './Numbers';

export default function Page({ count, onClickCount, onClickNumber }) {
  return (
    <div>
      <Title title="Counter" />
      <br />
      <Button count={count} onClick={onClickCount} />
      <br />
      <br />
      <Numbers onClick={onClickNumber} />
    </div>
  );
}
