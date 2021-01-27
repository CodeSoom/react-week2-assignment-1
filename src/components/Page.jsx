import React, { PureComponent } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

class Page extends PureComponent {
  render() {
    const { count, handleClick, handleClickNumber } = this.props;
    return (
      <div>
        <p>Counter</p>
        <Counter
          count={count}
          handleClick={handleClick}
        />
        <Buttons
          handleClickNumber={handleClickNumber}
        />
      </div>
    );
  }
}

export default Page;
