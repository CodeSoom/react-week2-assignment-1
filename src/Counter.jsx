import React from 'react';
import Button from './Button';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ number: value });
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <p>
          Counter
        </p>
        <p>
          <Button
            text={`Click me! (${number})`}
            onClick={() => this.handleClick(number + 1)}
          />
        </p>
        <p>
          {[1, 2, 3, 4, 5].map((i) => (
            <Button
              text={i}
              onClick={() => this.handleClick(number + i)}
            >
              {i}
            </Button>
          ))}
        </p>
      </div>
    );
  }
}

export default Counter;
