import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Card = ({ fruit }) => {
  const { _id, name, img, description, quantity, price, supplier } = fruit;

  // router
  const navigate = useNavigate()

  const handleStockUpdate = () => {
    
    if(axios.defaults.headers.common['x-access-token'] == JSON.parse(localStorage.getItem('accessToken'))){

      navigate(`/inventory/${_id}`)
    }else{
      toast('Unauthorized User')
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg bg-white">
          <img  style={{maxHeight: '250px'}} className="rounded-t-lg px-2 py-2" src={img} alt="" />
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
            <button
            onClick={handleStockUpdate}
              type="button"
              className="block w-full mx-auto py-2 font-bold bg-green-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Stock Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
