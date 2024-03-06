import React from 'react'
import { FaTrash } from "react-icons/fa";
import { useCartContext } from '../context/cart_context';
import FormatPrice from '../helpers/FormatPrice' 
import CartAmountToggle from './CartAmountToggle';

export default function CartItem({id,name,image,color,price,amount}) {
    const {removeItem,setIncrease,setDecrease} = useCartContext()

    // const setIncrease = () =>{
    //     amount > 1 ? setAmount(amount - 1) : setAmount(1)
    // }
    // const setDecrease = () =>{
    //     amount < stock ? setAmount(amount + 1) : setAmount(stock)
    // }
  return (
    <>
      <div className="cart_headding  grid grid-five-column">
        <div className="cart-image--name">
            <div>
                <figure>
                    <img src={image} alt={id} />
                </figure>
            </div>
            <div>
                <p>{name}</p>
                <div className="color-div">
                    <p>color:</p>
                    <div className="color-style" style={{backgroundColor:color,color:color}}></div>
                </div>
            </div>
        </div>
        {/* price  */}
        <div className="cart-hide">
            <p><FormatPrice price={price}/> </p>
        </div>
        {/* quantity  */}
        <CartAmountToggle  amount={amount}
                    setIncrease= {() => setIncrease(id)}
                    setDecrease={() => setDecrease(id)}/>
        {/* subtotal  */}
        <div className="cart-hide">
            <p>
                <FormatPrice price={price * amount}/>
            </p>
        </div>
        <div>
            <FaTrash className='remove_icon' onClick={()=>removeItem(id)}/>
        </div>
      </div>
    </>
  )
}
