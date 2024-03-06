import { useContext } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import reducer from "../reducer/cartReducer";

const cartContext = createContext()

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("cart") 
    //1st
    // let localCartData = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : null
    //2nd
    // let localCartData = localStorage.getItem("cart") !== undefined ? JSON.parse(localStorage.getItem("cart")) : null
     // return localCartData
    //3rd
    // if(localCartData === []){
    //     return [];
    // }else{
    //     return JSON.parse(localCartData)//use parse if u stringify data to back normal data
    // }
    //4th
    const parsedData = JSON.parse(localCartData)
    if(!Array.isArray(parsedData)) return [];
    return parsedData;
}
const initialState ={ 
    // cart:[],
    cart:getLocalCartData(),
    total_item:"",
    total_price:"",
    shipping_fee:50000,

}

const CartProvider = ({children})=>{

    const [state,dispatch] = useReducer(reducer,initialState)

    const addToCart = (id,color,amount,product)=>{
        dispatch({type:"ADD_TO_CART",payload:{id,color,amount,product}})
    }

    //to remove the individual item from cart
    const removeItem = (id) =>{
        dispatch({type:"REMOVE_ITEM",payload:id})
    }

    //to clear cart
const clearCart = () =>{
    dispatch({type:"CLEAR_CART"})
}
//increment and decrement product
const setIncrease = (id) =>{
    dispatch({type:"SET_DECREMENT",payload:id})
}
const setDecrease = (id) =>{
    dispatch({type:"SET_INCREMENT",payload:id})
}

    //to add the data in local storage
    useEffect(()=>{
        // dispatch({type:"CART_TOTAL_ITEM"})
        // dispatch({type:"CART_TOTAL_PRICE"})
        dispatch({type:"CART_ITEM_PRICE_TOTAL"})
        localStorage.setItem("cart",JSON.stringify(state.cart))
    },[state.cart])


    return <cartContext.Provider value={{...state,addToCart,removeItem,clearCart,setIncrease,setDecrease}}>{children}</cartContext.Provider>
}
const useCartContext = ()=>{
    return useContext(cartContext)
}

export {CartProvider,useCartContext}