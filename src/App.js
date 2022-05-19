import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import InventoryDetails from "./components/Inventory/InventoryDetails/InventoryDetails";
import Login from "./components/login-user/Login/Login";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
