import React, { createContext,useState } from 'react'
import AppContext from './AppContext';

export  const GlobalContext=({children})=> {
  const [arr,setArr]=useState([]);
    
    const FirstName=createContext();
      return (
        <AppContext.Provider value={{arr,setArr}}>
        {children}
      </AppContext.Provider>
        // <div>
        //     <FirstName.Provider value={{arr,setArr}}>  </FirstName.Provider>
        // </div>
      )
}
