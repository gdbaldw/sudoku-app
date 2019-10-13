import React from "react";

interface Props {
  field: {
    value: number;
    readonly: boolean;
  };
}

export const SudokuField: React.FC<Props> = ({ field }) => {
  return (
    <input className="field" value={field.value} readOnly={field.readonly} />
  );
};
