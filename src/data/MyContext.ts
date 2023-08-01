import { createContext } from "react";
import { MyContextData } from "./MyContextData";

//context data type
export let MyContext = createContext<MyContextData>({
  grid: [],
  createGridFun: (a:number,b:number) =>[],
  evolveGrid:(prevGrid:number[][],numRows:number,numCols:number)=>[],
});
