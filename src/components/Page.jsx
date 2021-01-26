import React, { PureComponent } from 'react';
import Counter from './Counter';
import Buttons from './Buttons';

class Page extends PureComponent {
  render() {
    const { count, onClick } = this.props;
    return (
      <div>
        <p>Counter</p>
        <Counter
          count={count}
          onClick={onClick}
        />
        <Buttons />
      </div>
    );
  }
}

export default Page;
