import React from 'react';
import Counter from './Counter';
import Buttons from './Buttons';
import PropTypes from 'prop-types'
function Page ({count, onButtonClick, onCounterClick}){
  return (
    <div>
    <p>Hello, World!</p>
    <Counter
      count = {count}
      onClick={onCounterClick}
    />
    <Buttons count = {count} onClick={onButtonClick}/>
    </div>
    );
}

Page.propTypes = {
  count: PropTypes.number,
  onCounterClick: PropTypes.func,
  onButtonClick: PropTypes.func,
};

export default Page;
