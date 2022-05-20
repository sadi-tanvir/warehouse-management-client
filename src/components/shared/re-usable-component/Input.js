import React from "react";
import classes from "../../../styles/style.module.css";

const Input = ({ divClass, inpClass, type, placeholder, ...rest }) => {
  return (
    <>
      <div className={divClass}>
        <input
          {...rest}
          type={type || "text"}
          className={`block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none ${classes.input_field} ${inpClass}`}
          id="exampleFormControlInput2"
          placeholder={placeholder}
        />
      </div>
    </>
  );
};

export default Input;
