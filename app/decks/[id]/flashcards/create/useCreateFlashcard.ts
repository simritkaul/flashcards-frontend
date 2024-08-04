import { useState, useEffect } from "react";

const useCreateFlashcard = () => {
  const [flashCardInfo, setFlashCardInfo] = useState("");
  return {
    flashCardInfo,
    setFlashCardInfo,
  };
};

export default useCreateFlashcard;
