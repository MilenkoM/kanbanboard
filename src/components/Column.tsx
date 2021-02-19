import React from "react";
import { ColumnContainer, ColumnTitle } from "./styles";

interface ColumnProps {
  text: string;
}

// eslint-disable-next-line import/prefer-default-export
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <div>{text}</div>
      {children}
    </ColumnContainer>
  );
};
