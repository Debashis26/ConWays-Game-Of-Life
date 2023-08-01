let grids: number[][] = [];

// let setRows = (e: number) => {
//   rows = e;
//   return rows;
// };

// let setcols = (e: number) => {
//   cols = e;
//   return cols;
// };

let setGrids = (e: number[][]) => {
  grids = e;
  return grids;
};

// Generating the grid
const createGrid = (rows: number, cols: number) => {
  let grid = [];
  for (let i: number = 0; i < rows; i++) {
    let row = [];
    for (let j: number = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * 2));
    }
    grid.push(row);
  }
  setGrids(grid);
  return grid;
};

// game of life logic
//rules
/*
1. Any live cell with fewer than two live neighbors dies due to underpopulation.
2. Any live cell with two or three live neighbors lives on to the next generation.
3. Any live cell with more than three live neighbors dies due to overpopulation.
4. Any dead cell with exactly three live neighbors becomes a live cell due to reproduction.
*/
function evolveGrid(prevGrid: number[][],numRows:number,numCols:number): number[][] {
  // Compute the next generation of the grid based on the rules
  const newGrid = createGrid(numRows,numCols);
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      const numNeighbors = countNeighbors(grids,row, col);
      if (prevGrid[row][col]) {
        console.log("checking..");
        
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

function countNeighbors(grid: number[][], row: number, col: number): number {
  const numRows = grid.length;
  const numCols = grid[0].length;

  let count = 0;
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i === 0 && j === 0) continue; // Skip the cell itself

      const newRow = row + i;
      const newCol = col + j;

      if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
        count += grid[newRow][newCol];
      }
    }
  }

  return count;
}



// function countNeighbors(row: number, col: number,numRows:number,numCols:number): number {
//   // Count the number of live neighbors around a cell
//   let count = 0;
//   const neighborsOffsets = [-1, 0, 1];
//   neighborsOffsets.forEach((rowOffset) => {
//     neighborsOffsets.forEach((colOffset) => {
//       if (rowOffset === 0 && colOffset === 0) return; // Skip the cell itself
//       const newRow = row + rowOffset;
//       const newCol = col + colOffset;
//       if (newRow >= 0 && newRow < numRows && newCol >= 0 && newCol < numCols) {
//         if (grids[newRow][newCol]) {
//           count++;
//         }
//       }
//     });
//   });
//   return count;
// }

// export { rows, setRows, cols, setcols, createGrid, grids };
export { createGrid, grids,evolveGrid };
