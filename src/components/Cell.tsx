
type ChildProps = {
  numberProp: number;
  rowIndex:number;
  colIndex:number;
  setBoardValue: (rowIndex: number, colIndex: number, newValue: number) => void;
};
const Cell: React.FC<ChildProps> = (props) => {
  // console.log(numberProp.numberProp);

  let style = {
    height: "10px",
    width: "10px",
    backgroundColor: props.numberProp < 1 ? "white" : "black",
    margin: "1px",
  };

  let handelClick=()=>{
    let num:number=props.numberProp === 1 ? 0 : 1;
    props.setBoardValue(props.rowIndex,props.colIndex,num);
  }
  
  return (
    <>
      <div style={style} onClick={handelClick}></div>
    </>
  );
};

export default Cell;
