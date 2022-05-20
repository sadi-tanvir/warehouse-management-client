import React, { useState } from "react";
import useInventory from "../../hooks/useInventory";
import Card from "./Card";
import Modal from "../shared/re-usable-component/Modal";
import Input from "../shared/re-usable-component/Input";
import axios from "axios";

const Inventory = () => {
  const [fruits, setFruits] = useInventory();
  console.log(fruits);
  const [inventory, setInventory] = useState({
    name: "",
    img: "",
    description: "",
    quantity: "",
    price: "",
    supplier: "",
  });

  console.log(inventory);

  // handleChange modal input
  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setInventory({ ...inventory, [name]: value });
  };

  // handle add item
  const handleAddItem = async (e) => {
    e.preventDefault();
    try {
      const {name,img,description,quantity,price,supplier} = inventory;
      console.log(name,img,description,quantity,price,supplier);
      const url = `http://localhost:5000/addInventory`;
      const res = await axios.post(url, {
        name,
        img,
        description,
        quantity,
        price,
        supplier
      });
      setFruits([...fruits, res.data._addedInventory]);
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
    <section className="mt-10 w-full">
      <h1 className="text-center my-5 text-5xl capitalize font-bold text-green-700">
        Inventory Management
      </h1>

      {/* add item */}
      <div className="w-10/12 mx-auto mb-5">
        <button
          // onClick={() => navigate(`/inventory/${_id}`)}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          type="submit"
          className="block px-5 ml-auto py-2 mt-3 font-bold bg-slate-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-slate-700 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Add Item
        </button>
          <form onSubmit={handleAddItem} className="px-3">
        <Modal>
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
        </Modal>
          </form>
      </div>

      {/* showing inventories */}
      <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {fruits.map((fruit) => (
          <Card fruit={fruit} />
        ))}
      </div>
    </section>
  );
};

export default Inventory;
