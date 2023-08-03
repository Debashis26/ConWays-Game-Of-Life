import "./App.css";
import GridModule from "./components/GridModule";
import { MyContext } from "./data/MyContext";
// import {rows,setRows,cols,setcols,createGrid,grids} from "./data/dataProvider"
import { createGrid, grids, evolveGrid,createDefaultGrid,countNeighbors } from "./data/dataProvider";

function App() {
  // console.log(grids)

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      {/* createGrid,createDefaultGrid,countNeighbors, grids,evolveGrid  */}
      <MyContext.Provider
        value={{ grid: grids,
                 createGridFun: createGrid,
                 evolveGrid,
                 createDefaultGrid,
                 countNeighbors,
                }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
          }}
        >
          <GridModule />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
