import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import { Button } from '../styles/Button';


export default function HeroSection({mydata}) {
    const {name} = mydata
  return (
    <>
      <Wrapper>
        <div className="container">

            <div className="grid grid-two-column">
                <div className="hero-section-data">
                    <p className="intro-data">Welcome to </p>
                    <h1> {name}</h1>
                    <p>Established in 2022, we,
                     Veera Exports Mini Oil Mill are a reliable 
                    ['Manufacturer', 'Supplier'] of groundnut oil etc. Veera Exports Mini Oil Mill
                     is one of Trade India's verified and
                     trusted sellers providing satisfactory range of groundnut oil at affordable prices...</p>
                    <NavLink to='/about'>
                     <Button>Read More</Button>
                    </NavLink>
                </div>
                {/* our homepage image */}
                <div className="hero-section-image">
                    <figure>
                        <img src="images/hero.png" alt="hero-section-photo" className='img-style' />
                    </figure>
                </div>
            </div>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`

  ${'' /* background-image:url(images/background.png);
  width:100%;
  background-repeat: no-repeat;
  background-size: auto;
  background-attachment: fixed;
  background-position: center; */}

${'' /* padding: 4rem 0; */}
@keyframes animatedBackground {
    from { background-position: 0 0; }
    to { background-position: 100% 0; }
}

.animate-area   { 
    width: 100%; 
    height: 400px; 
    background-image: url(./images/hero.jpg);
    background-position: 0px 0px;
    background-repeat: no-repeat;

    animation: animatedBackground 40s linear infinite;
}
  img {
    min-width: 10rem;
    height: 5rem;
  }
  .hero-section-data {
    margin: 13rem 0;
    p {
      margin: 7rem 0;
    }
    h1 {
      text-transform: capitalize;
      font-weight: bold;
      color:#1449F8;
    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 7rem;
    
  }
  figure {
    
  }
    ${'' /* &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1; */}
    
  
  .img-style {
    width: 100%;
    height: auto;
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 10rem;
    }
    figure::after {
      content: "";
      width: 50%;
      height: 100%;
      left: 0;
      top: 0%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }

    .hero-section-image { 
      margin-top: -16rem;
    }
  }
`;
