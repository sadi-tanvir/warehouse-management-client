import React from "react";
import { Route, Routes } from "react-router-dom";
import Error404 from "./components/404/Error404";
import AddItem from "./components/AddItem/AddItem";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import InventoryDetails from "./components/Inventory/InventoryDetails/InventoryDetails";
import Login from "./components/login-user/Login/Login";
import Register from "./components/login-user/Register/Register";
import MyItem from "./components/MyItem/MyItem";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/additem" element={<AddItem />} />
        <Route path="/myitem" element={<MyItem />} />
        <Route path="/inventory/:inventoryId" element={<InventoryDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
