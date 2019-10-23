import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        <div className="container">
          {counters.map(counter => (
            <div className="row" key={counter.id}>
              <div className="col">
                <Counter
                  key={counter.id}
                  counter={counter}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                />
              </div>
              <div className="w-100" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Counters;
