import React from "react";

const Button = ({ children, type, btnClass, btnColor, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        type={type || "button"}
        className={`py-2 bg-${btnColor}-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md bg-${btnColor}-700 hover:bg-${btnColor}-700 hover:shadow-lg focus:bg-${btnColor}-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-${btnColor}-800 active:shadow-lg transition duration-150 ease-in-out ${btnClass}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
