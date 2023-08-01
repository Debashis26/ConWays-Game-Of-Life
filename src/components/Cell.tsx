import { Box } from "@mui/material";

type ChildProps = {
  numberProp: number;
};
const Cell: React.FC<ChildProps> = (numberProp) => {
  // console.log(numberProp.numberProp);

  let style = {
    height: "10px",
    width: "10px",
    backgroundColor: numberProp.numberProp < 1 ? "white" : "black",
    margin: "1px",
  };

  return (
    <>
      <div style={style}></div>
    </>
  );
};

export default Cell;
