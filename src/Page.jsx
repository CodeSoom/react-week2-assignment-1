import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';
import Buttons from './Buttons';

function Page({ count, onClick, onClickNumber }) {
  return (
    <div>
      <p>Counter</p>
      <Counter
        count={count}
        onClick={onClick}
      />
      <Buttons
        onClickNumber={onClickNumber}
      />
    </div>
  );
}

Page.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  onClickNumber: PropTypes.func.isRequired,
};

export default Page;
