import React, { useState } from "react";
// Les Hooks sont une nouveauté de React 16.8. Ils permettent de bénéficier d’un état local 
// et d’autres fonctionnalités de React sans avoir à écrire de classes.
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
// import Counter from "./Counter";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const App = () => {
  const [clients, setClients] = useState([
    { id: 1, nom: "Joseph Staline" },
    { id: 2, nom: "Adolf Hitler" },
    { id: 3, nom: "Pol Pot" }
  ]);

  // clientInput = React.createRef();
  // Créer une variable. Utilisation des "refs", on peut faire référence  à un élément et garder sa trace

  // nouveauClient: ""
  // compteur: 0

  // handleClick = () => {
  //   this.setState({ compteur: this.state.compteur + 1 });
  //   La méthode .setState() permet de changer l'état du composant et d'alerter React
  //   console.log(this.state);
  //   const clients = this.state.clients.slice();
  //   .slice() permet de créer une copie du tableau
  //   clients.push({ id: 4, nom: "Benito Mussolini" });
  //   this.setState({ clients: clients });
  // };

  const handleAdd = (client) => {
    const updatedClients = [...clients];
    // [...] Spray operator: exploser le tableau initial en plusieurs éléments
    // et les remettre au sein d'un nouveau tableau qui contient la même chose que l'ancien
    // Autre option: const clients = this.state.clients.slice();
    updatedClients.push(client);
    setClients(updatedClients);
    // Autre option: this.setState({ clients: clients, nouveauClient: '' });
  };

  const handleDelete = (id) => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex((client) => client.id === id);
    // La méthode .findIndex() permet de trouver la position d'un élément particulier
    //     dans un tableau
    updatedClients.splice(index, 1);
    // .splice() permet à des éléments à partir d'un index donné dans un tableau
    setClients(updatedClients);
  };

  const title = "Liste des dictateurs";
  return (
    <div>
      <h1>{title}</h1>
      {/* <Counter /> */}
      {/* 1ère option : <button onClick={this.handleClick.bind(this)}> Cliquer </button> */}
      {/* .bind() précise à une fonction quelle valeur utiliser 
          pour la variable "this" */}
      {/* {this.state.compteur} */}
      {/* <button onClick={() => this.handleClick()}> Cliquer </button> */}
      {/* 2ème option: "Zéro function". Utiliser une fonction flechée permet de
        garder le même "this" */}
      <ul>
        {clients.map((client) => (
          // .map(): méthode () pour boucler lors du rendu des tableaux JS pour créer un tableau transformé
          <Client
            key={client.id}
            details={client}
            onDelete={handleDelete}
          />
        ))}
      </ul>
      <ClientForm onClientAdd={handleAdd} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
