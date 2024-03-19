import React from "react";

function ColorRender(props) {
  return (
    <>
      <div style={{width:"300px", height:"300px",display:"flex",border:"1px solid black",alignItems:"center",justifyContent:"center",backgroundColor:` ${props.color}`=="emptyValue"?"transparent":`${props.color}`}}>
        <p style={{color:"black"}}>{props.color ? props.color: " empty Value"}</p>
      </div>

      <input type="text" value={props.color}  onChange={(e)=>props.setColor(e.target.value)} />
    </>

// TODO : TO MAKE IT MORE USEFUL USE NPM I COLORNAMES PACKAGE

  );


}
ColorRender.defaultProps={
  color:"emptyValue",
}

export default ColorRender;
