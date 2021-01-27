import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { children, handleClickNumber } = this.props;
    return (
      <button type="button" onClick={() => handleClickNumber(children)}>
        {children}
      </button>
    );
  }
}

export default Button;
