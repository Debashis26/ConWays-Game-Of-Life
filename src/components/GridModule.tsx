import { useContext, useEffect, useState } from "react";
import { MyContext } from "../data/MyContext";
import Cell from "./Cell";

const GridModule = () => {
  let grid = useContext(MyContext).createGridFun(25, 25);
  let nextgrid=useContext(MyContext).evolveGrid(grid,25,25);
  console.table(grid);
  console.table(nextgrid);
  
  // useEffect(()=>{


  // },[grid])

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        {grid.map((innerArray, outerIndex) => (
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
                <Cell numberProp={item}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridModule;
