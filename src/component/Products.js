import { Button } from '../styles/Button';
import React ,{useState}from 'react'
import {Modal, ModalBody, ModalHeader } from 'reactstrap';//for popup toggle
import Popupquote from '../component/Popupquote';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Products(curele) {

  const  {id,name,image} = curele;


  return (
    <Wrapper>
      
            <NavLink to={`/singleproduct/${id}`}>
            <div className="container"> 
                <div className="card">
                  <figure>
                    <img src={image} alt={name} />
                  </figure> 
                            {/* <Button className='hover-btn'  onClick={()=>setmodal(true)}>GET QUOTE</Button> */}
                  <div className="card-data">
                    <div className="card-data-flex">
                      <h3>{name}</h3>
                    </div>
                  </div>

                </div>
            </div>
         </NavLink>      
    </Wrapper>
  )
}
const Wrapper = styled.section`
 @media (max-width: ${({theme})=>theme.media.mobile}){
 .card{
    width:70%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-left: 5rem;
    margin-bottom: 60px;
 } 
 }
`