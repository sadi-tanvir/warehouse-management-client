import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";
import {IS_CHANGE} from "../../redux/actions/types"

const Card = ({ fruit }) => {
  const { _id, name, img, description, quantity, price, supplier } = fruit;

  // router
  const navigate = useNavigate();

  // redux
  const dispatch = useDispatch();

  // handle delete inventory
  const deleteInventory = async () => {
    try {
      Swal.fire({
        title: "Are you sure?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          const deleteItem = async () => {
            const url = `http://localhost:5000/deleteItem/${_id}`;
            const res = await axios.delete(url);
            dispatch({type: IS_CHANGE})
          };
          deleteItem();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

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
            <button
              onClick={deleteInventory}
              type="button"
              className="block w-full mx-auto py-2 font-bold bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Delete Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
