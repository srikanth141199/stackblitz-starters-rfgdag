import React, { Component } from 'react';

class Increment extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  Increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  Decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.Increment}>Increment</button> &nbsp;
        <button onClick={this.Decrement}>Decrement</button>
      </div>
    );
  }
}

export default Increment;
