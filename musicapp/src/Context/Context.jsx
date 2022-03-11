import { createContext,useState } from "react";

export const Context=createContext();

export const ContextProvider=({children})=>{

    const [song,setSong]=useState({});

    return <Context.Provider value={{song,setSong}}>{children}</Context.Provider>
}