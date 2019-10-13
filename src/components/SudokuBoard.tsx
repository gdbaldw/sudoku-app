import React from "react";
import { Puzzle } from "../App";
import { SudokuField } from "./SudokuField";

interface Props {
  puzzle: Puzzle;
}

export const SudokuBoard: React.FC<Props> = ({ puzzle }) => {
  return (
    <div>
      {puzzle.rows.map(row => (
        <div className="row" key={row.index}>
          {row.cols.map(field => (
            <SudokuField field={field} />
          ))}
        </div>
      ))}
    </div>
  );
};
