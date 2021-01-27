import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { children, addByClickedNumber } = this.props;
    return (
      <button type="button" onClick={() => addByClickedNumber(children)}>
        {children}
      </button>
    );
  }
}

export default Button;
