const filterReducer = (state,action)=>{
    switch(action.type){
        case "LOAD_FILTER_PRODUCTS":

        let pricearr = action.payload.map((curele)=> curele.price)
        //1 way
        // console.log(Math.max.apply(null,pricearr))//always write two parameter
        //2 way
        // console.log(pricearr.reduce((initialVal,curVal)=>Math.max(initialVal,curVal),0))
        //3 way

        // let maxPrice = Math.max(...pricearr)
        // console.log(maxPrice)

            return{
                ...state,
                filter_products:[...action.payload],//copy of product data not original
                all_products:[...action.payload],//copy of product data not original
                // filters:{...state.filters,maxPrice,price:maxPrice}
            }
        case "SET_GRID_VIEW":
            return{
                ...state,
                grid_view:true,
            }
        case "SET_LIST_VIEW":
                return{
                    ...state,
                    grid_view:false,
                }
        case "GET_SORT_VALUE":
            return{
                ...state,
                sorting_value:action.payload,
            }
        case "SORTING_PRODUCTS":{
        let newSortData;
        // let tempSortProduct = [...action.payload] //copy of product data not original
        const {filter_products,sorting_value} = state
        let tempSortProduct = [...filter_products]

        const sortingProducts = (a,b) =>{
            if(sorting_value === "a-z")     
            return a.name.localeCompare(b.name)
            if(sorting_value === "z-a")     
            return b.name.localeCompare(a.name)
            if(sorting_value === "lowest")
            return a.price - b.price
            if(sorting_value === "highest")
            return b.price - a.price
            
        }
        newSortData = tempSortProduct.sort(sortingProducts)
        
        return{
            ...state,
            filter_products:newSortData,
        }
    }
    case "UPDATE_FILTERS_VALUE":
        const {name, value} = action.payload
        return {
            ...state,
            filters: {
              ...state.filters,
              [name]: value,
            },
        }
    case "FILTER_PRODUCTS":
        let {all_products} = state
        let tempFilterProduct = [...all_products]

        const {text,category,company,color,price} = state.filters
        if(text){
            tempFilterProduct = tempFilterProduct.filter((curele)=>{
                return curele.name.toLowerCase().includes(text)
            })
        }
        if(category !== "all"){
            tempFilterProduct = tempFilterProduct.filter((curele)=> curele.category === category
            )
        }
        if(company !== 'all'){
            tempFilterProduct = tempFilterProduct.filter((curele)=>
                 curele.company.toLowerCase() === company.toLowerCase()
            )
        }
        if(color !== 'all'){
            tempFilterProduct = tempFilterProduct.filter((curele)=>
            curele.colors.includes(color))
        }
        if(price === 0){
            tempFilterProduct = tempFilterProduct.filter((curele)=>  curele.price === price)

        }else{
            tempFilterProduct = tempFilterProduct.filter((curele)=>  curele.price <= price)
        }
        return {
            ...state,
            filter_products:tempFilterProduct
        }

        case "CLEAR_FILTERS":{
            return{
                ...state,
                filters:{
                    ...state.filters,
                    text:'',
                    category:"all",
                    company:'all',
                    color:'all',
                    maxPrice:0,
                    price:state.filters.maxPrice,
                    minPrice:state.filters.maxPrice
                }
            }
        }
        // case "SINGLE_PRODUCT" :{
        //     let {filter_products} = state
        //     let tempFilterProduct = [...filter_products]
    
        //     // const {name} = state.filters
        //     const data = tempFilterProduct.find((curele)=>curele.name.toLowerCase())
        // return {
        //     ...state,
        //     single_product:data
        // }

        // }

        default: 
        return state
    }
}
export default filterReducer