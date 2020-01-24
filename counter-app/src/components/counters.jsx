import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    let { onReset, counters, onDelete, onIncrement, onDecrement } = this.props;
    if (counters.length === 0) {
      return null;
    }
    return (
      <main className="container">
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>

        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </main>
    );
  }
}

export default Counters;
