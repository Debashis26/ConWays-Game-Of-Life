import { useContext, useEffect, useState } from "react";
import { MyContext } from "../data/MyContext";
import Cell from "./Cell";
import { Box } from "@mui/material";
import Slider from "@mui/material/Slider";

const GridModule = () => {
  let [state, setState] = useState(false);
  let [row, setRows] = useState(30);
  let [cols, setCols] = useState(30);
  let grid = useContext(MyContext).createGridFun(row, cols);
  let [board, setBoard] = useState(grid);
  let resetContext = useContext(MyContext).createDefaultGrid(row, cols);
  let newGrid = getNextGen(board, row, cols);

  let compareGrid = (gridA: number[][], gridB: number[][]) => {
    for (let i = 0; i < gridA.length; i++) {
      for (let j = 0; j < gridA[0].length; j++) {
        if (gridA[i][j] !== gridB[i][j]) {
          // If any element is different, matrices are not equal
          return false;
        }
      }
    }

    return true;
  };

  function valueRow(rowValue: number) {
    setRows(rowValue);
    return `${rowValue}`;
  }
  function valueCol(colValue: number) {
    setCols(colValue);
    return `${colValue}`;
  }
  let reset = () => {
    setBoard(resetContext);
    // grid=resetContext;
  };
  let random = () => {
    setBoard(grid);
    // grid=randomContext;
  };

  let setBoardValue = (
    rowIndex: number,
    colIndex: number,
    newValue: number
  ) => {
    const updatedBoard = [...board];
    updatedBoard[rowIndex][colIndex] = newValue;
    setBoard(updatedBoard);
  };

  function countNeighbors (grid: number[][], row: number, col: number): number {
    const numRows = grid.length;
    const numCols = grid[0].length;

    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue; // Skip the cell itself
        const newRow = row + i;
        const newCol = col + j;
        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols
        ) {
          count += grid[newRow][newCol];
        }
      }
    }
    return count;
  };

  function getNextGen(prevGrid: number[][], numRows: number, numCols: number) {
    const newGrid = resetContext;
    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const numNeighbors = countNeighbors(prevGrid, row, col);
        if (prevGrid[row][col]) {
          // Cell is alive
          newGrid[row][col] = numNeighbors === 2 || numNeighbors === 3 ? 1 : 0;
        } else {
          // Cell is dead
          newGrid[row][col] = numNeighbors === 3 ? 1 : 0;
        }
      }
    }
    return newGrid;
  }

  let start = () => {
    // setState(true);
    setBoard(resetContext);

  };
  


  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "60%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "2px solid black",
        }}
      >
        <div>
          {board.map((innerArray, outerIndex) => (
            <div
              key={outerIndex}
              style={{
                display: "flex",
                backgroundColor: "blue",
                justifyContent: "space-between",
              }}
            >
              {innerArray.map((item, innerIndex) => (
                <div
                  key={innerIndex}
                  style={{
                    display: "flex",
                    backgroundColor: "green",
                    padding: "0.3px",
                  }}
                >
                  <Cell
                    numberProp={item}
                    colIndex={innerIndex}
                    rowIndex={outerIndex}
                    setBoardValue={setBoardValue}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Box
        sx={{
          width: "40%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Box>
          {/* slider 1 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#04BC01",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Rows
              </p>
              <Slider
                aria-label="No of Rows"
                defaultValue={30}
                getAriaValueText={valueRow}
                color="secondary"
              />
            </Box>
            <p
              style={{
                color: "#04BC01",
                fontWeight: "bold",
              }}
            >
              {row}
            </p>
          </Box>
          {/* slider 2 */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "80%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#04BC01",
                  fontWeight: "bold",
                  width: "25%",
                }}
              >
                Columns
              </p>
              <Slider
                aria-label="No of Columns"
                defaultValue={30}
                getAriaValueText={valueCol}
                color="secondary"
              />
            </Box>
            <p
              style={{
                color: "#04BC01",
                fontWeight: "bold",
              }}
            >
              {cols}
            </p>
          </Box>
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "25px",
            }}
          >
            <button onClick={reset}>Reset</button>
            <button onClick={random}>Random</button>
          </Box>
          <Box>
            <button onClick={start}>Start</button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default GridModule;
