import React from "react";
import Clients from "./Clients";
import ClientForm from "./ClientForm";

class TutoLiorChamla extends React.Component {
  state = {
    clients: [
      { id: 1, nom: "mehdi soula" },
      { id: 2, nom: "mickael ferrer" },
      { id: 3, nom: "stephane gregoire" }
    ]
  };

  handleDelete = idClient => {
    const clientToRemove = [...this.state.clients];
    const index = clientToRemove.findIndex(
      currentClient => currentClient.id === idClient
    );
    clientToRemove.splice(index, 1);
    this.setState({ clients: clientToRemove });
  };

  handleAddClient = client => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({ clients: clients });
  };

  render() {
    return (
      <div>
        <Clients details={this.state.clients} onDelete={this.handleDelete} />
        <ClientForm
          nouveauClient={this.state.nouveauClient}
          clientToAdd={this.handleAddClient}
        />
      </div>
    );
  }
}

export default TutoLiorChamla;
