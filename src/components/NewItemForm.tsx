import React, { useState } from "react";
import { NewItemButton, NewItemContainer, NewItemInput } from "./styles";

interface NewItemFormProps {
  onAdd(text: string): void;
}

export const NewItemForm = (props: NewItemFormProps) => {
  const [text, setText] = useState("");

  return (  
  <NewItemContainer>
  <NewItemInput value={text} onChange={(e) => setText(e.target.value)} />
  <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
  </NewItemContainer>;)
};
