import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../images/Error404.png";
import classes from "../../styles/style.module.css";

const Error404 = () => {
    const navigate = useNavigate()
  return (
    <div
      style={{ backgroundImage: `url(${error})` }}
      className={`w-screen h-screen bg-no-repeat bg-cover ${classes.bgImage} flex justify-center items-center`}
    >
      {/* <div className="flex justify-center items-center"> */}
        <button
            onClick={() => navigate('/')}
          type="button"
          className="block w-4/12 mx-auto py-2 mt-96 font-bold bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          GO TO HOME PAGE
        </button>
      {/* </div> */}
    </div>
  );
};

export default Error404;
