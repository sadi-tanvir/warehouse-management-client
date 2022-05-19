import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const InventoryDetails = () => {
  // state
  const [fruit, setFruit] = useState({});

//   const { _id, name, img, description, quantity, price, supplier } = fruit;
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
  },[fruit]);

  const deliveredItem = async (e) => {
    const url = `http://localhost:5000/delivered/${inventoryId}`;
    const res = await axios.post(url);
    setFruit(res.data.inventoryItem);
  };

  return (
    <>
      <div className="w-full">
        <div className="w-8/12 mx-auto mt-5 flex justify-center">
          <div className="rounded-lg shadow-lg bg-white">
            <img
              className="rounded-t-lg px-2 py-2 mx-auto"
              src={fruit?.img}
              alt="fruit pic"
            />
            <div className="p-6">
              <h5 className="text-gray-900 text-xl font-medium mb-1">{fruit?.name}</h5>
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
