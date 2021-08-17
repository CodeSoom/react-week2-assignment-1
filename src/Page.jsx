import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';
import Buttons from './Buttons';
import Counter from './Counter';

export default function Page({ count, onClick }) {
  return (
    <div>
      <Title />
      <Buttons
        count={count}
        onClick={onClick}
      />
      <Counter
        count={count}
        onClick={onClick}
      />
    </div>
  );
}

Page.propTypes = {
  count: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
