import React, { Component } from "react";

class Client extends Component {
  render() {
    // Pour factoriser le code:
    // const details = this.props.details;
    // const onDelete = this.props.onDelete;

    // Pour le destructuring:
    const { details, onDelete } = this.props;
    return (
      <li>
        {details.nom}
        {/* La notion de "props", propriétés que l'on donne à un composant.
        On passe par this.props pour accéder aux propriétés */}
        <button onClick={() => onDelete(details.id)}> X </button>
      </li>
    );
  }
}

export default Client;

// LES COMPOSANTS FONCTIONNELS
// Trois façons de refactoriser le code 
// 1ère façon
// function Client(props) {
//     const { details, onDelete } = props;
//     return (
//       <li>
//         {details.nom}
//         <button onClick={() => onDelete(details.id)}> X </button>
//       </li>
//     );
// }

// 2ème façon
// function Client({ details, onDelete }) {
//     return (
//       <li>
//         {details.nom}
//         <button onClick={() => onDelete(details.id)}> X </button>
//       </li>
//     );
// }

// 3ème façon
// const Client = ({ details, onDelete }) => (
//       <li>
//         {details.nom}
//         <button onClick={() => onDelete(details.id)}> X </button>
//       </li>
//     );