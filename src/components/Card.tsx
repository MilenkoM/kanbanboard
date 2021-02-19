import React from "react";
import { CardContainer } from "./styles";

interface CardProps {
  text: string;
}

// eslint-disable-next-line import/prefer-default-export
export const Card = ({ text }: CardProps) => {
  return <CardContainer> {text} </CardContainer>;
};
