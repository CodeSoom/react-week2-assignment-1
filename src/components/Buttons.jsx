import React, { PureComponent } from 'react';
import Button from './Button';

class Buttons extends PureComponent {
  render() {
    const { addByClickedNumber } = this.props;
    return (
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button
            key={i}
            addByClickedNumber={addByClickedNumber}
          >
            {i}
          </Button>
        ))}
      </p>
    );
  }
}

export default Buttons;
