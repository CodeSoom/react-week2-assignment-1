import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    const { count, addByOne } = this.props;
    return (
      <button type="button" onClick={addByOne}>
        Click me!
        (
        {count}
        )
      </button>
    );
  }
}

export default Counter;
