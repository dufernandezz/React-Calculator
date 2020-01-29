import React from "react";
import "./Button.css";

export default props => (
  <button
    className={`
button 
${props.operation ? "operation" : ""}
${props.operation ? "double" : ""}
${props.operation ? "triple" : ""}
`}
    onClick={e =>props.click && props.click(props.label)}
  >
    {props.label}
  </button>
);
