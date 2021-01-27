import React from 'react';
import Button from './Button';
import PropTypes from 'prop-types';

function Buttons({onClick}){
  return (
    <p>
        {[1,2,3].map((i) => (
          <Button onClick={onClick} key = {i}>
          {i}
          </Button>
        ))}
    </p>

  );
}
Buttons.propTypes = {
  onClick: PropTypes.func
};

export default Buttons;
