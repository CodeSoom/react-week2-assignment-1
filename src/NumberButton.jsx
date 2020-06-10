import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class NumberButton extends React.Component {
  constructor(props) {
    super(props);
    this.caption = props.caption;
    this.handleClick = props.handleClick;
  }

  render() {
    return (
      <span>
        <button type="button" onClick={this.handleClick}>
          {this.caption}
        </button>
      </span>
    );
  }
}

export default NumberButton;
