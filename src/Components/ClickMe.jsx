import React from 'react';
import PropTypes from 'prop-types';

import Button from './Button';

function ClickMe({ count, onClick }) {
  return (
    <p>
      <Button key="click" onClick={() => onClick(1)}>
        {`Click me!! (${count})`}
      </Button>
    </p>
  );
}

ClickMe.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ClickMe;
