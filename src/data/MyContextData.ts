//context data type
export type MyContextData = {
  grid: number[][];
  createGridFun: (a:number,b:number) => number[][];
  evolveGrid:(prevGrid:number[][],numRows:number,numCols:number)=>number[][];
};
