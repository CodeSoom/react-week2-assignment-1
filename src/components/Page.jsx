import React, { PureComponent } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

class Page extends PureComponent {
  render() {
    const { count, addByOne, addByClickedNumber } = this.props;
    return (
      <div>
        <p>Counter</p>
        <Counter
          count={count}
          addByOne={addByOne}
        />
        <Buttons
          addByClickedNumber={addByClickedNumber}
        />
      </div>
    );
  }
}

export default Page;
