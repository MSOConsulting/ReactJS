import React, { Component } from "react";
import ListGroup from "./Starter Code/components/ListGroup";
import Movies from "./Movies";
class App extends Component {
  state = {};
  render() {
    return (
      <div className="row">
        <div className="col-md-auto">
          <ListGroup />
        </div>
        <div className="col">
          <Movies />
        </div>
      </div>
    );
  }
}

export default App;
