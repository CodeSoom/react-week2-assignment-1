import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function ClickMe({ count, setCount }) {
  return (
    <p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me!
        (
        {count}
        )
      </Button>
    </p>
  );
}

ClickMe.propTypes = {
  count: PropTypes.number.isRequired,
  setCount: PropTypes.func.isRequired,
};
