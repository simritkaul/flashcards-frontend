import React, { useState } from "react";

const useDecks = () => {
  const [decks, setDecks] = useState<Deck[]>([]);
  return { decks };
};

export default useDecks;
