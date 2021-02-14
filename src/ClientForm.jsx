import React, { useState } from "react";

const ClientForm = ({ onClientAdd }) => {
  const [nouveauClient, setNouveauClient] = useState("");
  const handleChange = (event) => {
    setNouveauClient(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // event.preventDefault() sert à éviter le rechargement de la page
    // console.log(this.clientInput.current.value);
    const id = new Date().getTime();
    const nom = nouveauClient;

    onClientAdd({ id, nom });
    setNouveauClient("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={nouveauClient}
        onChange={handleChange}
        // Autre option: ref={this.clientInput}
        type="text"
        placeholder="Ajouter un dictateur"
        id=""
      />
      <button>Confirmer</button>
    </form>
  );
};

export default ClientForm;
