import React, { useState } from "react";
import "./App.css";
const sudoku = require("sudoku");

const App: React.FC = () => {
  const [puzzle, setPuzzle] = useState(sudoku.makepuzzle());
  const [work, setWork] = useState([...puzzle]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Sudoku App</h1>
      </header>

      <article>
        {work.map((cv: any, i: number) => (
          <input
            key={i}
            value={cv === null ? "" : cv + 1}
            readOnly={puzzle[i] !== null}
            onChange={e => {
              const value = parseInt(e.target.value);
              if (0 < value && value < 10) {
                const temp = [...work];
                temp.splice(i, 1, -1 + value);
                setWork(temp);
              }
            }}
          />
        ))}
      </article>

      <button
        onClick={() => {
          alert(
            sudoku
              .solvepuzzle(puzzle)
              .every((v: number, i: number) => v === work[i])
              ? "Congratulations! You have solved the puzzle."
              : "Sorry, try again."
          );
        }}
      >
        Check solution
      </button>

      <button
        onClick={() => {
          setWork(sudoku.solvepuzzle(puzzle));
        }}
      >
        Solve
      </button>

      <button
        onClick={() => {
          const temp = sudoku.makepuzzle();
          setPuzzle(temp);
          setWork(temp);
        }}
      >
        New puzzle
      </button>
    </div>
  );
};

export default App;
