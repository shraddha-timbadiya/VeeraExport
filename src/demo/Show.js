import React, { useEffect,useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { DUMMY } from '../component/JsonData'

function Show() {
    const {id} = useParams()
    console.log('params',id)
    
    const product = DUMMY.find((prod)=>prod.id === id)    
    const {image,name,company,price} = product
  return (
    <div>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{company}</p>
    </div>
  )
}

export default Show
