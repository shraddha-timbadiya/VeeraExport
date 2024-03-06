import React from 'react'
import { useProductcontext } from '../context/productcontext'
import styled from "styled-components";
import Products from './Products';


export default function FeatureProducts() {
    
const {isLoading, featureProducts} = useProductcontext()
console.log(featureProducts)
if(isLoading){
  return <div>....Loading</div>
}
  return (
    <>
      <Wrapper className='section'>
        <div className="container">
          <div className="intro-data">Check Now!</div>
          <div className="common-heading">Our Feature Services</div>
          <div className="grid grid-three-column">
           { featureProducts.map((curele)=>{
            return <Products key={curele.id} {...curele} />
           })}
          </div>
        </div>

      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      ${'' /* background-color: rgba(0, 0, 0, 0.5); */}
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      opacity:0.5
      ${'' /* transform: scale(1.2); */}
    }
    img {
      width:100%;
      border-radius:1rem;
      ${'' /* margin-top: 1.5rem; */}
      height: 22rem;
      ${'' /* transition: all 0.2s linear; */}
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    ${'' /* &:hover{ */}
        ${'' /* box-shadow: 6px 5px 10px grey; */}
        ${'' /* background-color: rgba(0, 0, 0, 0.3);  */}
      ${'' /* } */}

  
    .hover-btn{
          position: absolute;
      width: 80%;
      display:flex;
      justify-content:center;
      align-items:center;
      background-color:black;
      top: 150px;
      left:3rem;
      text-align: center;
      opacity: 0;
      transition: opacity .5s ease;
        
    } 
    &:hover .hover-btn {
  opacity: 1;
}   
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width:100%;
    }
  }
  .card {
    width:60%;
    margin-left:10rem;
      }  
  }
`;
