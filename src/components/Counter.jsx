import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    const { count, handleClick } = this.props;
    return (
      <button type="button" onClick={handleClick}>
        Click me!
        (
        {count}
        )
      </button>
    );
  }
}

export default Counter;
