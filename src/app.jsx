import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    this.handleIncrease = () => {
      const { number } = this.state;
      this.setState({
        number: number + 1,
      });
    };
    this.handleIncrease1 = () => {
      const { number } = this.state;
      this.setState({
        number: number + 1,
      });
    };
    this.handleIncrease2 = () => {
      const { number } = this.state;
      this.setState({
        number: number + 2,
      });
    };
    this.handleIncrease3 = () => {
      const { number } = this.state;
      this.setState({
        number: number + 3,
      });
    };
    this.handleIncrease4 = () => {
      const { number } = this.state;
      this.setState({
        number: number + 4,
      });
    };
    this.handleIncrease5 = () => {
      const { number } = this.state;
      this.setState({
        number: number + 5,
      });
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <div>Counter</div>
        <button type="button" onClick={this.handleIncrease}>
          Click me! (
          { number }
          )
        </button>
        <br />
        <button type="button" onClick={this.handleIncrease1}>1</button>
        <button type="button" onClick={this.handleIncrease2}>2</button>
        <button type="button" onClick={this.handleIncrease3}>3</button>
        <button type="button" onClick={this.handleIncrease4}>4</button>
        <button type="button" onClick={this.handleIncrease5}>5</button>
      </div>
    );
  }
}

export default App;
