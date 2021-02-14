import React, { useState } from "react";

const Counter = (props) => {
  const [compteur, setCompteur] = useState(1);
  // const tableau = useState(1);
  // Autre façon: const [compteur, setCompteur] = tableau;

  // const compteur = tableau[0];
  // const setCompteur = tableau[1];

  const handleChange = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      {compteur}
      <button onClick={handleChange}>Incrémenter</button>
      {/* <button onClick={() => setCompteur(compteur + 1)}>Incrémenter</button> */}
    </div>
  );
};

export default Counter;
