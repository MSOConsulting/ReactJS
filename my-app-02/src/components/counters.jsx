import React, { Component } from "react";
import Counter from "../counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 2 },
      { id: 3, value: 5 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = id => {
    var countersCopy = this.state.counters.slice();
    var index = countersCopy.findIndex(elt => elt.id === id);
    countersCopy.splice(index, 1);
    this.setState({ counters: countersCopy });
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter onDelete={this.handleDelete} counter={counter} />
        ))}
      </div>
    );
  }
}

export default Counters;
