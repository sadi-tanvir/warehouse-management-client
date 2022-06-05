import React from "react";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";
import Banner from "./Banner/Banner";
import InventoryItem from "./InventoryItem/InventoryItem";

const Home = () => {
  return (
    <>
      <ReactHelmet title="Home" />
      <Banner />
      <InventoryItem />
    </>
  );
};

export default Home;
