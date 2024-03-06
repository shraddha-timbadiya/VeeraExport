import React from 'react'
import styled from 'styled-components'
import Products from '../component/Products';

export default function GridView({products}) {
    console.log('all',products)
  return (
    <>
     <Wrapper className='section'>
            <div className="container grid grid-three-column">
            {
                products.map((cur)=>{
                    return <Products key={cur.id} {...cur}/>
                    
                })
            }
            </div>
     </Wrapper> 
    </>
  )
}

const Wrapper = styled.section`
  padding: 4rem 0;
  .container {
    max-width: 120rem;
  }
  .grid {
    gap: 3.2rem;
  }
  figure {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    ${'' /* transition: all 0.5s linear; */}


          &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0%;
            height: 100%;
            transition: all 0.2s linear;
            cursor: pointer;
          
          }
          &:hover::after {
            width: 100%;
        
          }
          &:hover img {
            opacity:0.5
          }
          img {
              width:100%;
              border-radius:1rem;
            height: 20rem;
          }
  }
  .card {
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
      &:hover{

          }

  
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
      padding: 0 1rem;
    }
    
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
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
