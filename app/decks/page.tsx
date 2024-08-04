import React from "react";
import useDecks from "./useDecks";

const Decks = () => {
  const { decks } = useDecks();
  return <div>Decks</div>;
};

export default Decks;
