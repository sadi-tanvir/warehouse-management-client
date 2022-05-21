import React, { useState } from "react";
import useInventory from "../../hooks/useInventory";
import Card from "./Card";
import Modal from "../shared/re-usable-component/Modal";
import Input from "../shared/re-usable-component/Input";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";

const Inventory = () => {
  const [fruits, setFruits] = useInventory();

  const navigate = useNavigate();

  return (
    <>
      <ReactHelmet title="Inventory" />
      <section className="mt-10 w-full">
        <h1 className="text-center my-5 text-5xl capitalize font-bold text-green-700">
          Inventory Management
        </h1>

        {/* add item */}
        <div className="w-10/12 mx-auto mb-5">
          <button
            onClick={() => navigate(`/additem`)}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            type="submit"
            className="block px-5 ml-auto py-2 mt-3 font-bold bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add Item
          </button>
        </div>

        {/* showing inventories */}
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {fruits.map((fruit) => (
            <Card fruit={fruit} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Inventory;
