import React from "react";
import useInventory from "../../hooks/useInventory";
import Card from "./Card";

const Inventory = () => {
const [fruits, setFruits] = useInventory()
console.log(fruits);
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
    </section>
  );
};

export default Inventory;
