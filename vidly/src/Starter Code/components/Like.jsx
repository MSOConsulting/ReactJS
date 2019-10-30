import React, { Component } from "react";

class Like extends Component {
  render() {
    return (
      <i
        style={{ cursor: "pointer" }}
        onClick={this.props.onclicked}
        className={this.props.liked ? "fa fa-heart" : "fa fa-heart-o"}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
