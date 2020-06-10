import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class TextButton extends React.Component {
  constructor(props) {
    super(props);
    this.caption = props.caption;
    this.handleClick = props.handleClick;
  }

  render() {
    return (
      <p>
        <button type="button" onClick={this.handleClick}>
          Click Me! (
          {this.caption}
          )
        </button>
      </p>
    );
  }
}

export default TextButton;
