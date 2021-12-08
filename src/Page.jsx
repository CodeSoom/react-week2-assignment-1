import Title from './Title';
import Button from './Button';
import Numbers from './Numbers';

function Page({ count, handleClick, handleClickNumber }) {
  return (
    <div>
      <Title title="Counter" />
      <br />
      <Button count={count} onClick={handleClick} />
      <br />
      <br />
      <Numbers onClick={handleClickNumber} />
    </div>
  );
}

export default Page;
