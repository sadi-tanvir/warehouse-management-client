import React, { useEffect, useState } from "react";
import useInventory from "../../hooks/useInventory";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";
import { apiBaseUrl } from "../utils/apiBaseUrl";

const Inventory = () => {
  const [fruits, setFruits] = useInventory();
  // state
  const [count, setCount] = useState("");
  const [size, setSize] = useState(5);
  const [page, setPage] = useState(0)

  // router
  const navigate = useNavigate();

  // get document count
  useEffect(() => {
    axios.get(`${apiBaseUrl}/inventoryCount`).then((res) => {
      const count = res.data.count;
      const dividedCount = Math.ceil(count / 10);
      setCount(dividedCount);
    });
  }, []);

  // get data from server
  useEffect(() => {
    const getInventor = async () =>{
      const res = await axios.get(`http://localhost:5000/inventory?page=${page}&size=${size}`)
      setFruits(res.data.inventory);
  }
  getInventor()
  },[page,size])


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
          {fruits?.map((fruit) => (
            <Card fruit={fruit} />
          ))}
        </div>

        <div className="w-full mt-5 flex justify-center items-center">
          {
            [...Array(count).keys()].map(num => {
              return  <button onClick={() => setPage(num)} className={`px-3 py-2 ml-2 rounded text-white font-bold ${num === page ? 'bg-green-700':'bg-slate-400 '}`}>{num+1}</button>
            })
          }

            <select onChange={(e) => setSize(e.target.value)} style={{width: '70px'}} class="form-select ml-5" aria-label="Default select example">
              <option value="5" selected >5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20 ">20</option>
            </select>
        </div>
      </section>
    </>
  );
};

export default Inventory;
