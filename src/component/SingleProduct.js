import Table from 'react-bootstrap/Table';
import { Button } from '../styles/Button';
import React ,{useState}from 'react'
import {Modal, ModalBody, ModalHeader } from 'reactstrap';//for popup toggle
import Popupquote from '../component/Popupquote';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProductcontext } from "../context/productcontext";
import PageNavigation from "./PageNavigation";
import Myimage from "./Myimage";
import { Container } from "../Container";
import Star from "./Star";


const SingleProduct = () =>{
  const [modal,setmodal] = useState(false)

  const {getSingleProduct , isSingleLoading, singleProduct} = useProductcontext()

const { id } = useParams()
// const API = `/Product.json?id=${id}`
const API = 'Product.json'
const pid = id

const { name, brand,description, packagein ,packagesize,image} = singleProduct

useEffect(()=>{
  getSingleProduct(API,pid)
},[])

if(isSingleLoading){
  return <div className="page_loading">Loading.....</div>
}
  return <Wrapper>

      {/* <PageNavigation title={name}/> */}
    <Container className="container">
      <div className="grid grid-two-column">
    {/* product images */}
        <div className="product_images">
        <img src={image} alt={name} />
        {/* <Myimage imgs={image}/> */}
        </div>
        
        {/* product data */}
        <div className="product-data">
            <h2>{name}</h2>
      <Table  bordered hover className='tableData'>
      
        <tbody>
        <tr>
                <td className='ftd'>Brand</td>
                <td>{brand}</td>
              </tr>
              <tr>
                <td className='ftd'>Packaging Available In</td>
                <td>{packagein}</td>
              </tr>
              <tr>
                <td className='ftd'>Packaging Size Available</td>
                <td>{packagesize}</td>
              </tr>
      </tbody>
    </Table>
          <p>{description}</p>
            
            
            {/* toggle quote  */}
            <Modal size='lg' isOpen={modal} toggle={()=>setmodal(!modal)}>
                <ModalHeader toggle={()=>setmodal(!modal)}>
                <h3>INQUIRE DIRECTLY WITH THE SUPPLIER</h3>
                </ModalHeader>
                <ModalBody>
                        <Popupquote names={name} image={image} />
                </ModalBody>
            </Modal>
         <Button className='hover-btn'  onClick={()=>setmodal(true)}>GET QUOTE</Button>

        </div>
      </div>
    </Container>
  </Wrapper>;
}

const Wrapper = styled.section`
  .container {
    padding: 20rem 0;
  }
  img {
      max-width: 100%;
      max-height: 100%;
    background-size: cover;
      object-fit: contain;
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  .product_images{ 
    height:100%;
    width:100%;
    display:flex;
    justify-content:center;
    align-item:center; 
    
  } 
    .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    .tableData{
      font-size:1.5rem;
      .ftd{
        color:grey;
      }
    }

      
    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;






