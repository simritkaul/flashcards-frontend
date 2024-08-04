import React from "react";
import useCreateFlashcard from "./useCreateFlashcard";

const CreateFlashcard = () => {
  const { flashCardInfo, setFlashCardInfo } = useCreateFlashcard();
  return <div>CreateFlashcard</div>;
};

export default CreateFlashcard;
