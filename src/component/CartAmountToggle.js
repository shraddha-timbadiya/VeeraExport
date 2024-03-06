import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";

export default function CartAmountToggle({amount,setIncrease,setDecrease}) {
  return (
    <>
     <div className="cart-button">
     <div className="amount-toggle">
        <button onClick={() => setIncrease()}><FaMinus/></button>
        <div className="amount-style">{amount}</div>
        <button onClick={() => setDecrease()}><FaPlus/></button>

     </div></div> 
    </>
  )
}
