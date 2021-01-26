import React, { PureComponent } from 'react';

class Button extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <button type="button">
        {children}
      </button>
    );
  }
}

export default Button;
