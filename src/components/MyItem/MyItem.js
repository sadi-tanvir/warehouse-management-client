import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Card from "./Card";
import { useSelector } from "react-redux";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";
import { apiBaseUrl } from "../utils/apiBaseUrl";

const MyItem = () => {
  const [myItem, setMyItem] = useState([]);

  const { isChange } = useSelector((state) => state.globalReducer);


  // firebase
  const [user, loading, error] = useAuthState(auth);
  
  useEffect(() => {
    const getInventor = async () => {
      const res = await axios.get(
        `${apiBaseUrl}/myInventory?email=${user.email}`
      );
      setMyItem(res.data.inventory);
    };
    getInventor();
  }, [isChange]);

  return (
    <>
      <ReactHelmet title="My Item" />
      <section className="mt-10 w-full min-h-screen">
        <h1 className="text-center my-5 text-5xl capitalize font-bold uppercase text-green-700">
          My Inventory Items
        </h1>

        {/* showing inventories */}
        <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {myItem.map((fruit) => (
            <Card key={fruit._id} fruit={fruit} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyItem;
