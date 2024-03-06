import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { DUMMY } from '../component/JsonData'

// const DUMMY = [
//     {
//    "id":"products1",
//    "name":"Groundnut Oil",
//    "company":"veera Export",
//    "price":"12000",
//    "colors":[
//        "#ff0000",
//        "#000000",
//        "#CDD0D0"
//    ],
//    "image":"./images/product.jpg",
//    "description":"Improves Heart Health,Controls Cholesterol ,Prevents Cancer,Prevents Alzheimer's Disease",
//    "category":"Groundnut Oil",
//    "star":3.5,
//    "featured":true
// },
// {
//    "id":"products6",
//    "name":"Groundnut Oil",
//    "company":"veera Export",
//    "price":"12000",
//    "colors":[
//        "#ff0000",
//        "#000000"
//    ],
//    "image":"./images/sticker.jpg",
//    "description":"Vitamin A & D,Net Contains(15 Kg.),Fat(100g),Poly Unsaturated Fat(32g),Mono Unsaturated Fat(46.2mg)",
//    "category":"Groundnut Oil",
//    "star":2.5,
//    "featured":false
// },
// {
//    "id":"products",
//    "name":"Oil Cake",
//    "company":"Nilkanth",
//    "price":"12000",
//    "colors":[
//        "#ff0000",
//        "#000000",

//        "#CDD0D0"
//    ],
//    "image":"./images/oil_cake1.jpg",
//    "description":"Ground nut oil cake is rich in nitrogen and facilitates better growth of garden plants and trees. Also contains phosphorus about 1.5% and potash 1.3% enables flowering and higher yield in plants.",
//    "featured":true ,
//    "category":"Oil Cake",
//    "star":5
// },
// {
//    "id":"oilproducts2",
//    "name":"Groundnut Seeds",
//    "company":"veera Export",
//    "price":"25000",
//    "colors":[
//        "#000000",
//        "#CDD0D0"
//    ],
//    "image":"./images/groundnut_seeds.jpg",
//    "description":"Boosts Memory,Stops Hair Loss,Helps Lose Weight,Child’s Growth,Treat Gallstones,Prevents Alzheimer’s Disease",
//    "category":"Groundnut Seeds",
//    "star":5,
//    "featured":true
// }
// ]

// const API = '/Product.json'
function List() {
  return (
    <div>
      {
    
        DUMMY.map((data)=>{
            return(

                <div style={{border:'1px solid black'}}>
                <NavLink to={`/show/${data.id}`}>
               <h1>{data.id}</h1>
               <h2>{data.name}</h2>
               <h3>{data.company} {data.price} {data.colors} </h3>
               

               <img src={data.image} alt={data.name}/>

               <h3>{data.description}</h3>
               <h2>{data.category}</h2>
               {data.star}
               </NavLink>

               </div>
            )
        })
      }
    </div>
  )
}

export default List
