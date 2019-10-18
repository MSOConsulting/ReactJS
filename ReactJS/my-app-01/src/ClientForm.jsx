import React, { Component } from "react";

class ClientForm extends Component {
  state = {
    nouveauClient: ""
  };

  handleChange = nouveauClientSaisi => {
    this.setState({ nouveauClient: nouveauClientSaisi.currentTarget.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.clientToAdd({
      id: new Date().getTime(),
      nom: this.state.nouveauClient
    });
    this.setState({ nouveauClient: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.nouveauClient}
            placeholder="Ajouter un client"
            onChange={this.handleChange}
          />
          <button>Confirmer</button>
        </form>
      </div>
    );
  }
}

export default ClientForm;
