import React, { Component } from "react";

class Counter extends Component {
  handleIncrement = () => {
    var nouveauCounter = this.state.value;
    this.setState({ value: nouveauCounter + 1 });
  };
  render() {
    return (
      <div>
        <span>{this.props.counter.value}</span>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)}>
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
