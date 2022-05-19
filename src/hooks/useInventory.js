import React, { useEffect, useState } from 'react';
import axios from "axios"

const useInventory = () => {
   const [fruits, setFruits] = useState([])

   useEffect(() => {
       const getInventor = async () =>{
           const res = await axios.get('fruits.json')
           setFruits(res.data);
       }
       getInventor()
   },[])

   return [fruits, setFruits]
};

export default useInventory;