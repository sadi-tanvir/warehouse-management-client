import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Error404 from "./components/404/Error404";
import AddItem from "./components/AddItem/AddItem";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import InventoryDetails from "./components/Inventory/InventoryDetails/InventoryDetails";
import Login from "./components/login-user/Login/Login";
import Register from "./components/login-user/Register/Register";
import CheckAuth from "./components/login-user/RequireAuth/CheckAuth";
import RequireAuth from "./components/login-user/RequireAuth/RequireAuth";
import MyItem from "./components/MyItem/MyItem";
import Footer from "./components/shared/Footer/Footer";
import Header from "./components/shared/Header/Header";
import setAuthToken from "./components/utils/setAuthToken";

const App = () => {
  if(localStorage.getItem('accessToken')){
    setAuthToken(JSON.parse(localStorage.getItem('accessToken')))
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={
          <RequireAuth>
            <Inventory />
          </RequireAuth>
        } />
        <Route path="/inventory/:inventoryId" element={
          <RequireAuth>
            <InventoryDetails />
          </RequireAuth>
        } />
        <Route path="/additem" element={
          <RequireAuth>
            <AddItem />
          </RequireAuth>
        } />
        <Route path="/myitem" element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        } />
        <Route path="/login" element={
          <CheckAuth>
            <Login />
          </CheckAuth>
        } />
        <Route path="/register" element={
          <CheckAuth>
            <Register />
          </CheckAuth>
        } />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />

      <ToastContainer />
    </>
  );
};

export default App;
