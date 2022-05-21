import React from "react";
import ReactHelmet from "../shared/ReactHelmet/ReactHelmet";
import Banner from "./Banner/Banner";
import InventoryItem from "./InventoryItem/InventoryItem";
import Blogs from "../Blog/Blogs"

const Home = () => {
  return (
    <>
      <ReactHelmet title="Home" />
      <Banner />
      <InventoryItem />
      <Blogs />
    </>
  );
};

export default Home;
