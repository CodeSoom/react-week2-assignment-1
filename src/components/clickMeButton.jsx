import React from 'react';
import PropTypes from 'prop-types';

function ClickMeButton({ count, handelClick }) {
  ClickMeButton.propTypes = {
    count: PropTypes.string.isRequired,
    handelClick: PropTypes.string.isRequired,
  };

  return (
    <div>
      <button type="button" onClick={handelClick}>
        Click me!
        (
        {count}
        )
      </button>
    </div>
  );
}
export default ClickMeButton;
