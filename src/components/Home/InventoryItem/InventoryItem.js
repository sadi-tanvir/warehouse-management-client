import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useInventory from "../../../hooks/useInventory";
import Card from "./Card";

const InventoryItem = () => {
  const [fruits, setFruits] = useState([])


  useEffect(() => {
    const getInventor = async () =>{
        const res = await axios.get('http://localhost:5000/homeInventory')
        setFruits(res.data.inventory);
    }
    getInventor()
},[])

// router
const navigate = useNavigate()
  return (
    <section className="mt-10 w-full">
      <h1 className="text-center my-5 text-5xl capitalize font-bold text-green-700">
        Inventory Management
      </h1>
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {
            fruits.map(fruit => <Card fruit={fruit} />)
        }
      </div>
      <button
            onClick={() => navigate(`/inventory`)}
              type="button"
              className="block w-4/12 mx-auto py-2 font-bold mt-5 bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Manage All Inventories
            </button>
    </section>
  );
};

export default InventoryItem;