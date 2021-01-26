import React, { PureComponent } from 'react';

class Counter extends PureComponent {
  render() {
    const { count, onClick } = this.props;
    return (
      <button type="button" onClick={onClick}>
        Click me!
        (
        {count}
        )
      </button>
    );
  }
}

export default Counter;
