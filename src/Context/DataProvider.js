import React, {useEffect,createContext, useState } from "react";
import Data from '../Data';
export const DataContext=createContext();
export const DataProvider=(props)=>{
    const [Products,setProducts]= useState([])
    useEffect(()=>{
        const Product=Data.items;
        if(Product){
            setProducts(Product)
        }else{
            setProducts([])
        }
    },[])
    const value={
        Products:[Products]
    }
    return(
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    );
}