//context data type
// countNeighbors
export type MyContextData = {
  grid: number[][];
  createGridFun: (a:number,b:number) => number[][];
  evolveGrid:(prevGrid:number[][],numRows:number,numCols:number)=>number[][];
  createDefaultGrid:(a:number,b:number)=>number[][];
  countNeighbors:(grid:number[][],a:number,b:number)=>number;
};
