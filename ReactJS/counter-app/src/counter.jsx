import React, { Component } from "react";

class count extends Component {
  state = { count: 0 };

  handleIncrement = () => this.setState({ count: this.state.count + 1 });

  render() {
    return (
      <div>
        <span className={this.getBadgecount()}>{this.formatcount()}</span>
        <button onClick={this.handleIncrement} className="btn btn-secondary">
          INCREMENT
        </button>
      </div>
    );
  }

  formatcount() {
    let { count } = this.state;
    return count === 0 ? "zero" : count;
  }

  getBadgecount() {
    let classes = "badge m-2 badge-";
    return (classes += this.state.count === 0 ? "warning" : "primary");
  }
}

export default count;
