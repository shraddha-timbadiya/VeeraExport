import axios from "axios";
import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from '../reducer/Productreducer'

const AppContext = createContext();

const API = '/Product.json'

const initialState = {
    isLoading:false,
    isError:false,
    products:[],
    featureProducts:[],
    //for single product
    isSingleProduct:false,
    singleProduct:{},
}

const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer,initialState)
    const getproducts = async (url) =>{
        dispatch({type:"SET_LOADING"})

        try{
            // const res = await axios({
            //     method: 'get',
            //     url:url,
            //     params:{ }
            // });
        const res = await axios.get(url)
        const products = await res.data
        dispatch({type:"SET_API_DATA",payload:products})
        }catch(err){
            dispatch({type:"API_ERROR"})
            console.log(err)
        }
    }

    // my 2nd api call for single product
    const getSingleProduct = async(url,pid)=>{
        dispatch({type:"SET_SINGLE_LOADING"})
        try{    
            const res = await axios.get(`/${url}?id=${pid}`)
            const singleProduct = await res.data
            const filterdata = singleProduct.find(data =>data.id === pid)
            dispatch({type:"SET_SINGLE_PRODUCT",payload:filterdata})
        }catch(error){
            console.log(error)
            dispatch({type:"SET_SINGLE_ERROR"})
        }
    }           
  
    useEffect(()=>{
        getproducts(API)
    },[])
return  <AppContext.Provider value={{...state,getSingleProduct}}> {/* also used object as a value={{myname:'hello'}} */}
            {children}
        </AppContext.Provider>
} 

//custom hoooks
const useProductcontext = () =>{
    return useContext(AppContext)
}
export {AppProvider,AppContext,useProductcontext}