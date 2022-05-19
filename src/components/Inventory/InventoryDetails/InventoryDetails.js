import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "../../../styles/style.module.css";

const InventoryDetails = () => {
  // state
  const [fruit, setFruit] = useState({});
  const [updateQty, setUpdateQty] = useState("")
  
  // router
  const { inventoryId } = useParams();

  // getting data from server
  useEffect(() => {
    const getSingleInventory = async () => {
      const url = `http://localhost:5000/inventory/item?id=${inventoryId}`;
      const res = await axios.get(url);
      setFruit(res.data.inventoryItem);
    };
    getSingleInventory();
  }, [fruit]);

  // delivered item
  const deliveredItem = async (e) => {
    const url = `http://localhost:5000/delivered/${inventoryId}`;
    const res = await axios.post(url);
    setFruit(res.data.inventoryItem);
  };

  // add stock item
  const increaseStock = async (e) =>{
      e.preventDefault()
    const url = `http://localhost:5000/increase/${inventoryId}`;
    const res = await axios.post(url,{
            quantity: parseInt(updateQty)
    });
    setFruit(res.data.inventoryItem);
    setUpdateQty("")
  }

  return (
    <>
      <div className="w-full">
        {/* Email input */}
        <form onSubmit={increaseStock} className="mt-16 mx-auto w-6/12 flex">
          <input
          onChange={(e) => setUpdateQty(e.target.value)}
            type="text"
            className={`block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding transition ease-in-out m-0 focus:outline-none ${classes.input_field}`}
            id="exampleFormControlInput2"
            placeholder="quantity"
          />
          <button
            type="submit"
            className="block w-4/12 mx-auto py-2 font-bold bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out ml-5"
          >
            Add Quantity
          </button>
        </form>
        <div className="w-8/12 mx-auto mt-5 flex flex-col justify-center">
          <div className="rounded-lg shadow-lg bg-white">
            <img
              className="rounded-t-lg px-2 py-2 mx-auto"
              src={fruit?.img}
              alt="fruit pic"
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-1">
                {fruit?.name}
              </h5>
              <h6 className="text-gray-900 text-xl font-medium mb-1">
                Stock: {fruit?.quantity} kg
              </h6>
              <p className="text-gray-900 text-lg font-medium mb-1">
                Price: {fruit?.price} tk
              </p>
              <small className="block font-bold mb-2">
                supplier: {fruit?.supplier}
              </small>
              <p className="text-gray-700 text-base">{fruit?.description}</p>
              <button
                onClick={deliveredItem}
                type="button"
                className="block w-full mx-auto py-2 font-bold bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Delivered
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryDetails;
