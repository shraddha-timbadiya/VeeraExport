
export default function cartReducer(state,action) {
    if(action.type === "ADD_TO_CART"){
        let {id,color,amount,product} = action.payload

        //tackle the existing product
        let existingProduct = state.cart.find((curele) => curele.id === id+color)
        if(existingProduct){
            let updateProduct = state.cart.map((curele) =>{
                if(curele.id === id + color){
                    let newAmount = curele.amount + amount;

                    if(newAmount >= curele.max){
                        newAmount = curele.max //do not overrride stock 
                    }

                    return {
                        ...curele,
                        amount:newAmount,
                    }
                }else{
                    return curele
                }
            })
            return {
                ...state,
                cart:updateProduct,
            }
        }else{

        let cartProduct;
        cartProduct = {
            id:id + color,
            name:product.name,
            color,
            amount,
            image:product.image[0].url,
            price:product.price,
            max:product.stock,
        }
        return {
            ...state,
            cart:[...state.cart,cartProduct],
        }
    }
    }
    if(action.type === "REMOVE_ITEM"){
        let updateCart = state.cart.filter((curele)=> curele.id !== action.payload)
        return {
            ...state,
            cart:updateCart,
        }
    }
    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart:[],
        }
    }
    if(action.type === "SET_INCREMENT"){
        let updatedProduct = state.cart.map((curele) =>{
            if(curele.id === action.payload){
                let incAmount = curele.amount + 1
                if(incAmount >= curele.max){
                    incAmount = curele.max;
                }
                return {
                    ...curele,
                    amount:incAmount,
                }
            }else{
                return curele;
            }
        })
        return {...state,cart:updatedProduct}
    }
    if(action.type === "SET_DECREMENT"){
        let updatedProduct = state.cart.map((curele) =>{
            if(curele.id === action.payload){
                let decAmount = curele.amount - 1
                if(decAmount <= 1){
                    decAmount = 1;
                }
                return {
                    ...curele,
                    amount:decAmount,
                }
            }else{
                return curele;
            }
        })
        return {...state,cart:updatedProduct}
    }

    if(action.type === "CART_TOTAL_ITEM"){
        let updatedItemVal = state.cart.reduce((initialVal,curele)=>{
            let {amount} = curele
            initialVal = initialVal + amount
            return initialVal
        },0)
        return {
            ...state,
            total_item:updatedItemVal,
        }
    }
    if(action.type === "CART_TOTAL_PRICE"){
        let total_price = state.cart.reduce((initialVal,curele) =>{
            let {price,amount} = curele
            initialVal = initialVal + price * amount
            return initialVal
        },0)
        return {
            ...state,
            total_price,
        }
    }
    if(action.type === "CART_ITEM_PRICE_TOTAL"){
        let {total_item,total_price} = state.cart.reduce((initialVal,curele) =>{
            let {price,amount} = curele;

            initialVal.total_item += amount;
            initialVal.total_price += price *amount 

            return initialVal
        },
        {
            total_item:0,//initial value
            total_price:0//initial value
        })
        return {
            ...state,
            total_item,
            total_price,
        }
    }
  return state;
}
