import React from 'react';
import propTypes from 'prop-types';

import Button from '../components/Button';
import NumberButtons from '../components/NumberButtons';

function Counter({ count, onClick }) {
  return (
    <div>
      <p>Counter</p>
      <Button
        id="Click me"
        count={count}
        onClick={() => { onClick(1); }}
      />
      <NumberButtons count={count} onClick={onClick} />
    </div>
  );
}

Counter.propTypes = {
  count: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired,
};
export default Counter;
