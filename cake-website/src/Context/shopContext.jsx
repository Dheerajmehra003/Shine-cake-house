import { createContext, useEffect, useState } from "react";
import {products} from '../assets/assets'

export const Shopcontext = createContext();

const ShopContextProvider = (props) =>{

    const currency = '₹';
    const delivery_fee = 100;

const[cartItems,setCartItems]=useState({})
const addToCart = async (itemID,size) =>{

    if(!size){
        toast.error('Select Product size')
        return;
    }
    let cartData = structuredClone(cartItems);

    if(cartData[itemID]) {
        if(cartData[itemID][size]){
            cartData[itemID][size]+=1;
        }
        else{
            cartData[itemID][size] = 1;
        }
    }
    else{
        cartData[itemID]={};
        cartData[itemID][size]=1;
    }
    setCartItems(cartData);

   }
   useEffect(()=>{
    console.log(cartItems)
   },[cartItems])

    const value = {
        products , currency,
        delivery_fee,
        addToCart,cartItems
      

    }


    return (
        <Shopcontext.Provider value={value}>
            {props.children}
        </Shopcontext.Provider>
    )

}
export default ShopContextProvider;