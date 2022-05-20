import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import useInventory from "../../hooks/useInventory";
import Button from "../shared/re-usable-component/Button";

const Card = ({ fruit }) => {
  const [fruits, setFruits] = useInventory();
  const { _id, name, img, description, quantity, price, supplier } = fruit;
  // router
  const navigate = useNavigate();


  // handle delete inventory
  const deleteInventory = async () => {
      try {
        const url = `http://localhost:5000/deleteItem/${_id}`;
      const res = await axios.delete(url)
      
      // loading purpose
      setFruits([...fruits, res.data._inventoryItem]);
      } catch (error) {
        console.log(error);
      }
  }
  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white">
          <img className="rounded-t-lg px-2 py-2" src={img} alt="" />
          <div className="p-6">
            <h5 className="text-gray-900 text-xl font-medium mb-1">{name}</h5>
            <h6 className="text-gray-900 text-xl font-medium mb-1">
              Stock: {quantity} kg
            </h6>
            <p className="text-gray-900 text-lg font-medium mb-1">
              Price: {price} tk
            </p>
            <small className="block font-bold mb-2">supplier: {supplier}</small>
            <p className="text-gray-700 text-base">
              {description.slice(0, 120)}...
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <Button
                onClick={() => navigate(`/inventory/${_id}`)}
                btnClass="block w-full mt-3"
                btnColor="green"
              >
                Manage
              </Button>
              <Button
                onClick={deleteInventory}
                btnClass="block w-full mt-3"
                btnColor="red"
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
