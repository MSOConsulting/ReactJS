import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 },
      { id: 1, value: 2 },
      { id: 2, value: 4 },
      { id: 3, value: 6 }
    ]
  };
  handleDelete = id => {
    let counters = this.state.counters.filter(c => c.id !== id);
    this.setState({ counters });
  };
  handleReset = () => {
    let counters = [...this.state.counters];
    counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = counter => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(counter);
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <Counters
          counters={this.state.counters}
          onDelete={this.handleDelete}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onReset={this.handleReset}
        />
      </React.Fragment>
    );
  }
}

export default App;
