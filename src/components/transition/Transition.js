import React from "react";
import "./transition.css";

function Transition({ onClick, name }) {
  return (
    <h2 className="transition" onClick={onClick}>
      {name}
    </h2>
  );
}

export default Transition;
