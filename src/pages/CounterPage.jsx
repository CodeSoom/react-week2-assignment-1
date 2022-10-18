import React from 'react';
import ClickableButton from '../components/Button/ClickableButton';
import IncreasingByNumberButton from '../components/Button/IncreasingByNumberButton';

function CounterPage({ count, handleClick, numberList }) {
  return (
    <div>
      <p>Counter</p>
      <ClickableButton count={count} handleClick={handleClick} />
      <div>
        {
          numberList.map((value) => (
            <IncreasingByNumberButton
              number={value}
              key={value}
              handleClick={handleClick}
            />
          ))
        }

      </div>
    </div>
  );
}

export default CounterPage;
