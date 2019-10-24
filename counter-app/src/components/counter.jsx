import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="row" key={this.props.counter.id}>
        <div className="col-1">
          <span className={this.getBadgecount()}>{this.formatcount()}</span>
        </div>
        <div className="col">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm m-2"
            onClick={() => this.props.onDelete(this.props.counter.id)}
          >
            X
          </button>
        </div>
      </div>
    );
  }

  formatcount() {
    let { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }

  getBadgecount() {
    let classes = "badge m-2 badge-";
    return (classes += this.props.counter.value === 0 ? "warning" : "primary");
  }
}

export default Counter;
