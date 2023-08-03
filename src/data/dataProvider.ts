let grids: number[][] = [];

// Generating the random grid ✔
const createGrid = (rows: number, cols: number) => {
  let grid = [];
  // console.log("createGrid is calling....")

  for (let i: number = 0; i < rows; i++) {
    let row = [];
    for (let j: number = 0; j < cols; j++) {
      row.push(Math.floor(Math.random() * 2));
    }
    grid.push(row);
  }
  return grid;
};
// create the default grid ✔
const createDefaultGrid = (rows: number, cols: number) => {
  let grid = [];
  // console.log("reset is calling....")
  for (let i: number = 0; i < rows; i++) {
    let row = [];
    for (let j: number = 0; j < cols; j++) {
      row.push(0);
    }
    grid.push(row);
  }
  return grid;
};


function evolveGrid(prevGrid: number[][],numRows:number,numCols:number): number[][] {
  // Compute the next generation of the grid based on the rules
  // console.log("evolv is calling....")

  const newGrid = createGrid(numRows,numCols);
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      
      const numNeighbors = countNeighbors(prevGrid,row, col);
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

function countNeighbors(grid: number[][], row: number, col: number): number {
  const numRows = grid.length;
  const numCols = grid[0].length;

  console.log("length"+ grid.length+"  "+grid[0].length);
  

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

export { createGrid,createDefaultGrid,countNeighbors, grids,evolveGrid };
