import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from "react-redux";

const useInventory = () => {
    const [fruits, setFruits] = useState([])
    const {isChange} = useSelector((state) => state.globalReducer);

   useEffect(() => {
       const getInventor = async () =>{
           const res = await axios.get('http://localhost:5000/inventory')
           setFruits(res.data.inventory);
       }
       getInventor()
   },[isChange])

   return [fruits, setFruits]
};

export default useInventory;