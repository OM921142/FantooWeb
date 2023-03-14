import React,{createContext, useState} from 'react';


// export default function Context() {
    
    
// const [arr,setArr]=useState([]);

// const FirstName=createContext();
//   return (
//     <div>
//         <FirstName.Provider value={{arr,setArr}}>  </FirstName.Provider>
//     </div>
//   )
// }


export default createContext({
   arr:[],
   setArr:{}, 
   count:(1),
   setCount:{},


})