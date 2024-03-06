import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Navbar from './Navbar';

export default function Header() {
  return (
    <>
      <MainHeader>
        <NavLink to='/'>
            <img src="./images/logo.png" className='logo' alt="my logo img" />
        </NavLink>
        <Navbar/>
      </MainHeader>
    </>
  )
}
const MainHeader = styled.header`
width:100%;
padding:0 1.8rem;
height:8rem;
background-color:${({theme})=> theme.colors.bg};
${'' /* background-color: #4da5e2 ; */}
display:flex;
justify-content: center;
align-items: center;
justify-content: space-between;
position:fixed;
z-index:11111;

.logo{
    height:5rem;
}
`;
