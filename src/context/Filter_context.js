import { useReducer } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";
import reducer from "../reducer/Filter_reducer";
import { useProductcontext } from "./productcontext";

const FilterContext = createContext()
const initialState = {
    filter_products:[],
    all_products:[],
    grid_view:true,
    sorting_value:"lowest",
    filters:{
        text:'',
        category:"all",
        company:'all',
        color:'all',
        maxPrice:0,
        price:0,
        minPrice:0
    },
    single_product:[]

}

export const FilterContextProvider = ({children}) =>{
    const {products} = useProductcontext()
    
    const [state,dispatch] = useReducer(reducer,initialState)

    // to set the grid view 
    const setGridView = ()=>{
        return dispatch({type:"SET_GRID_VIEW"})
    }
    //to set the list view
    const setListView = ()=>{
        return dispatch({type:"SET_LIST_VIEW"})
    }
    //sorting function
    const sorting = (e) =>{
        let userValue = e.target.value
        dispatch({type:"GET_SORT_VALUE",payload:userValue})
    }

    //update the filter value
    const updateFilterValue = (e) =>{
        let name = e.target.name
        let value = e.target.value

        return dispatch({type:"UPDATE_FILTERS_VALUE",payload:{name,value}})
    }
    //to clear the filters
    const clearFilters = ()=>{
        dispatch({type:"CLEAR_FILTERS"})
    }
    // const singleProduct = () =>{
    //     dispatch({type:"SINGLE_PRODUCT"})

    // }
    //sort the products
useEffect(()=>{
    dispatch({type:"FILTER_PRODUCTS"})
dispatch({type:"SORTING_PRODUCTS"})
},[products,state.sorting_value,state.filters])

    useEffect(()=>{
      dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})
    },[products])

    return <FilterContext.Provider value={{...state,setGridView,setListView,sorting,updateFilterValue,clearFilters}}>
    {children}
    </FilterContext.Provider>
 }
export const useFilterContext = () =>{
    return useContext(FilterContext)
}