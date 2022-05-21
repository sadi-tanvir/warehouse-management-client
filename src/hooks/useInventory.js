import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from "react-redux";
import { apiBaseUrl } from '../components/utils/apiBaseUrl';

const useInventory = () => {
    const [fruits, setFruits] = useState([])
    const {isChange} = useSelector((state) => state.globalReducer);

   useEffect(() => {
       const getInventor = async () =>{
           const res = await axios.get(`${apiBaseUrl}/inventory`)
           setFruits(res.data.inventory);
       }
       getInventor()
   },[isChange])

   return [fruits, setFruits]
};

export default useInventory;