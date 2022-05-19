import React, { useEffect, useState } from 'react';
import axios from "axios"

const useInventory = () => {
   const [fruits, setFruits] = useState([])

   useEffect(() => {
       const getInventor = async () =>{
           const res = await axios.get('http://localhost:5000/inventory')
           setFruits(res.data.inventory);
           console.log(res.data.inventory);
       }
       getInventor()
   },[])

   return [fruits, setFruits]
};

export default useInventory;