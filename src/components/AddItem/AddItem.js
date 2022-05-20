import axios from "axios";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useInventory from "../../hooks/useInventory";
import Input from "../shared/re-usable-component/Input";

const AddItem = () => {
  // firebase
  const [user, loading, error] = useAuthState(auth);

  // state
  const [inventory, setInventory] = useState({
    email:user.email,
    name: "",
    img: "",
    description: "",
    quantity: "",
    price: "",
    supplier: "",
  });


  // handleChange modal input
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setInventory({ ...inventory, [name]: value });
  };

  // handle add item
  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const { email,name, img, description, quantity, price, supplier } = inventory;
      const url = `http://localhost:5000/addInventory`;
      const res = await axios.post(url, {
        email,
        name,
        img,
        description,
        quantity,
        price,
        supplier,
      });
      setInventory({
        name: "",
        img: "",
        description: "",
        quantity: "",
        price: "",
        supplier: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <form onSubmit={handleAddItem} className="w-6/12 shadow mt-10 px-5 pt-5" action="">
        <h1 className='mb-10 uppercase text-4xl font-bold text-green-700 mx-auto'>Add a new item</h1>
          <Input
            name="email"
            onChange={handleAddChange}
            value={inventory.email}
            divClass="mb-3"
            placeholder="email"
            readOnly={true}
          />
          <Input
            name="name"
            onChange={handleAddChange}
            value={inventory.name}
            divClass="mb-3"
            placeholder="name"
          />
          <Input
            name="img"
            onChange={handleAddChange}
            value={inventory.img}
            divClass="mb-3"
            placeholder="Image link"
          />
          <Input
            name="description"
            onChange={handleAddChange}
            value={inventory.description}
            divClass="mb-3"
            placeholder="description"
          />
          <Input
            name="quantity"
            onChange={handleAddChange}
            value={inventory.quantity}
            divClass="mb-3"
            type="number"
            placeholder="quantity"
          />
          <Input
            name="price"
            onChange={handleAddChange}
            value={inventory.price}
            divClass="mb-3"
            type="number"
            placeholder="price"
          />
          <Input
            name="supplier"
            onChange={handleAddChange}
            value={inventory.supplier}
            divClass="mb-3"
            placeholder="supplier"
          />

          <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
            <button
              type="button"
              class="px-6 py-2.5 bg-red-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              class="px-6 py-2.5 bg-green-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-900 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-900 active:shadow-lg transition duration-150 ease-in-out ml-1"
              data-bs-dismiss="modal"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddItem;
