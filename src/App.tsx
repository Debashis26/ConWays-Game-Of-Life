import "./App.css";
import GridModule from "./components/GridModule";
import { MyContext } from "./data/MyContext";
// import {rows,setRows,cols,setcols,createGrid,grids} from "./data/dataProvider"
import { createGrid, grids, evolveGrid } from "./data/dataProvider";

function App() {
  // console.log(grids)

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <MyContext.Provider value={{ grid: grids, createGridFun: createGrid,evolveGrid }}>
        <div
          style={{
            width: "70%",
            height: "100%",
            border: "2px solid black",
          }}
        >
          <GridModule />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
