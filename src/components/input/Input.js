import React from "react";
import "./input.css";

function Input({ type, onChange, placeHolder, name, onBlur }) {
  return (
    <input
      onBlur={onBlur}
      name={name}
      className="input"
      type={type}
      onChange={onChange}
      placeholder={placeHolder}
    ></input>
  );
}

export default Input;
