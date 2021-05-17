import React from 'react';
import propTypes from 'prop-types';

import Counter from '../components/Counter';
import NumberButtons from '../components/NumberButtons';

export default function CounterPage({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        id="counter"
        count={count}
        onClick={() => { onClick(1); }}
      />
      <NumberButtons count={count} onClick={onClick} />
    </div>
  );
}

CounterPage.propTypes = {
  count: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};
