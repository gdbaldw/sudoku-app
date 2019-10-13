import React, { useState } from "react";
import "./App.css";
import { SudokuBoard } from "./components/SudokuBoard";
const sudoku = require("sudoku");

interface Col {
  row: number;
  col: number;
  value: number;
  readonly: boolean;
}

interface Row {
  cols: Col[];
  index: number;
}

export interface Puzzle {
  rows: Row[];
}

function makePuzzle(): Puzzle {
  const raw = sudoku.makepuzzle();
  const rows: Row[] = [];
  const puzzle: Puzzle = { rows: rows };

  for (let i = 0; i < 9; i++) {
    const cols: Col[] = [];
    const row: Row = { cols: cols, index: i };
    for (let j = 0; j < 9; j++) {
      const value = raw[i * 9 + j];
      const col = { row: i, col: j, value: value, readonly: value != null };
      row.cols.push(col);
    }
    puzzle.rows.push(row);
  }

  return puzzle;
}

const App: React.FC = () => {
  const [puzzle, setPuzzle] = useState(makePuzzle());
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku App</h1>
      </header>
      <SudokuBoard puzzle={puzzle} />
    </div>
  );
};

export default App;
