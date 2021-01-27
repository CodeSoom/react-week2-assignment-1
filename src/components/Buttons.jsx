import React, { PureComponent } from 'react';
import Button from './Button';

class Buttons extends PureComponent {
  render() {
    const { handleClickNumber } = this.props;
    return (
      <p>
        {[1, 2, 3, 4, 5].map((i) => (
          <Button
            key={i}
            handleClickNumber={handleClickNumber}
          >
            {i}
          </Button>
        ))}
      </p>
    );
  }
}

export default Buttons;
