import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

export default function Counter({ children, setCount }) {
  return (
    <p>
      <Button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click me!
        (
        {children}
        )
      </Button>
    </p>
  );
}

Counter.propTypes = {
  children: PropTypes.node.isRequired,
  setCount: PropTypes.func.isRequired,
};
