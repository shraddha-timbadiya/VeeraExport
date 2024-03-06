// import React from 'react'
// import styled from 'styled-components'
// import { NavLink } from 'react-router-dom';
// import {FiShoppingCart} from 'react-icons/fi'
// import { CgMenu ,CgClose } from "react-icons/cg";
// import { useState } from 'react';
// import { useCartContext } from '../context/cart_context';
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from '../styles/Button';

// export default function Navbar() {
//     const {loginWithRedirect,user, logout ,isAuthenticated} = useAuth0();
//     const [menuIcon, setMenuIcon] = useState()
//     const {total_item} = useCartContext()
//     const Nav = styled.nav`
    
//     .navbar-lists{
//         display:flex;
//         gap:4.8rem;
//         align-items:center;
        
//         .navbar-link{
//             &:link,
//             &:visited{
//                 display:inline-block;
//                 text-decoration:none;
//                 font-size:1.8rem;
//                 font-weight:500;
//                 text-transform:uppercase;
//                 color:${({theme})=>theme.colors.black};
//                 transition:color 0.5s linear;
//             }
//             &:hover,
//             &:active{
//                 color:${({theme})=>theme.colors.helper};
//             }
//         }
//     }
//     .mobile-navbar-btn{
//         display:none;
//         background-color:transparent;
//         cursor:pointer;
//         border:none;
//     }
//     .mobile-nav-icon[name='close-outline']{
//         display:none;
//     }
//     .close-outline{
//         display:none;
//     }
//     .cart-trolley-link{
//         position:relative;
    
//     .cart-trolley{
//         position:relative;
//         font-size:3.2rem;
//     }
//     .cart-total--item{
//         width:2.4rem;
//         height:2.4rem;
//         position:absolute;
//         background-color: white;
//         color:white;
//         border-radius:50%;
//         display:grid;
//         place-items:center;
//         top:-20%;
//         left:70%;
//         background-color:${({theme})=>theme.colors.helper}
//     }
//     }
//     .user-login-name{
//         text-transform:capitalize;
//     }
//     .user-logout,
//     .user-login{
//         font-size:1.4rem;
//         padding:0.8rem 1.4rem;
//     }
//     @media (max-width: ${({theme})=>theme.media.mobile}){
//         .mobile-navbar-btn{
//             display:inline-block;
//             z-index:9999;
//             border:${({theme})=>theme.colors.black};
//             .mobile-nav-icon{
//                 font-size:4.2rem;
//                 color:${({theme})=>theme.colors.black};
//             }
//         }
    
//     .active .mobile-nav-icon{
//         display:none;
//         font-size:4.2rem;
//         position:absolute;
//         top:30%;
//         right:10%;
//         color:${({theme})=>theme.colors.black};
//         z-index:9999;
//     }
//     .active .close-outline{
//         display:inline-block;
//     }
//     .navbar-lists{
//         width:100vw;
//         height:100vh;
//         position:absolute;
//         top:0;
//         left:0;
//         background-color:#fff;

//         display:flex;
//         justify-content:center;
//         align-items:center;
//         flex-direction:column;

//         visibility:hidden;
//         opacity:0;
//         transform:transparentX(100%);
//         transition: all 3s linear;
//     }
//     .active .navbar-lists{
//         visibility:visible;
//         opacity:1;
//         transform:translateX(0);
//         z-index:999;
//         transform-origin:right;
//         transition:all 3s linear;
//         .navbar-link{
//             font-size:4.2rem;
//         }
//     }
//     .cart-trolley--link{
//         position:relative;
//         .cart-trolley{
//             position:relative;
//             font-size:5.2rem;
//         }
//         .cart-total--item{
//             width:4.2rem;
//             height:4.2rem;
//             font-size:2rem;
//         }
//     }
//     .user-logout,
//     .user-login{
//         font-size:2.2rem;
//         padding:0.8rem 1.4rem;
//     }
//     }
//     `;
//   return (
//     <>
//      <Nav>
//         <div className={menuIcon ? 'navbar active' : 'navbar'}>
//            <ul className="navbar-lists">
//             <li><NavLink to='/' className='navbar-link home-link' onClick={()=> setMenuIcon(false)}>Home</NavLink></li>
//             <li><NavLink to='/about' className='navbar-link' onClick={()=> setMenuIcon(false)}>About</NavLink></li>
//             <li><NavLink to='/contact' className='navbar-link' onClick={()=> setMenuIcon(false)}>Contact</NavLink></li>
//             <li><NavLink to='/products' className='navbar-link' onClick={()=> setMenuIcon(false)}>Product</NavLink></li>
//           {isAuthenticated && <li> <p>{user.name}</p></li>}
//            {
//             isAuthenticated ? (<li><Button onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Button></li>)
//                             : (<li><Button onClick={() => loginWithRedirect()}>Log In</Button></li>)
         
//            }
           
//             <li><NavLink to='/cart' className='navbar-link cart-trolley-link' onClick={()=> setMenuIcon(false)}>
//                 <FiShoppingCart className='cart-trolley'/>
//                 <span className='cart-total--item'>{total_item}</span>
//             </NavLink></li>

//            </ul> 
//            {/* two button for open and close of menu */}
//            <div className="mobile-navbar-btn">
//             <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=> setMenuIcon(true)}/>
//             <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={()=> setMenuIcon(false)}/>
            
//            </div>
//         </div>
//      </Nav>
//     </>
//   )
// }



import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom';
import { CgMenu ,CgClose } from "react-icons/cg";
import { useState } from 'react';
import { Button } from '../styles/Button';
import {MdPhoneCallback} from 'react-icons/md'


export default function Navbar() {

    const [menuIcon, setMenuIcon] = useState()


    const Nav = styled.nav`


    .navbar-lists{
        display:flex;
        gap:4.8rem;
        justify-content:center;
        align-items:center;
        height:3.5rem;
            .icon{
                ${'' /* background-color:transparent; */}
                font-size:2rem;

            }
            .callbtn{
                margin:0;
            }
        .navbar-link{
            &:link,
            &:visited{
                display:inline-block;
                text-decoration:none;
                font-size:1.8rem;
                font-weight:500;
                text-transform:uppercase;
                color:${({theme})=>theme.colors.black};
                transition:color 0.5s linear;
            }
            &:hover,
            &:active{
                color:${({theme})=>theme.colors.helper};
            }
        }
    }
    .mobile-navbar-btn{
        display:none;
        background-color:transparent;
        cursor:pointer;
        border:none;
    }
    .mobile-nav-icon[name='close-outline']{
        display:none;
    }
    .close-outline{
        display:none;
    }
    .cart-trolley-link{
        position:relative;
    
    .cart-trolley{
        position:relative;
        font-size:3.2rem;
    }
    .cart-total--item{
        width:2.4rem;
        height:2.4rem;
        position:absolute;
        background-color: white;
        color:white;
        border-radius:50%;
        display:grid;
        place-items:center;
        top:-20%;
        left:70%;
        background-color:${({theme})=>theme.colors.helper}
    }
    }
    .user-login-name{
        text-transform:capitalize;
    }
    .user-logout,
    .user-login{
        font-size:1.4rem;
        padding:0.8rem 1.4rem;
    }
    @media (max-width: ${({theme})=>theme.media.mobile}){
        .mobile-navbar-btn{
            display:inline-block;
            z-index:9999;
            border:${({theme})=>theme.colors.black};
            .mobile-nav-icon{
                font-size:4.2rem;
                color:${({theme})=>theme.colors.black};
            }
        }
    
    .active .mobile-nav-icon{
        display:none;
        font-size:4.2rem;
        position:absolute;
        top:30%;
        right:10%;
        color:${({theme})=>theme.colors.black};
        z-index:9999;
    }
    .active .close-outline{
        display:inline-block;
    }
    .navbar-lists{
        width:100vw;
        height:100vh;
        position:absolute;
        top:0;
        right:0;
        background-color:#fff;

        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;

        visibility:hidden;
        opacity:0;
        transform:transparentX(100%);
        transition: all 3s linear;
    }
    .active .navbar-lists{
        visibility:visible;
        opacity:1;
        transform:translateX(0);
        z-index:999;
        transform-origin:right;
        transition:all 3s linear;
        .navbar-link{
            font-size:4.2rem;
        }
    }
    .cart-trolley--link{
        position:relative;
        .cart-trolley{
            position:relative;
            font-size:5.2rem;
        }
        .cart-total--item{
            width:4.2rem;
            height:4.2rem;
            font-size:2rem;
        }
    }
    .user-logout,
    .user-login{
        font-size:2.2rem;
        padding:0.8rem 1.4rem;
    }
    }
    `;
  return (
    <>
     <Nav >
        <div className={menuIcon ? 'navbar active' : 'navbar'}>
        {/* <div className='navbar active'> */}

           <ul className="navbar-lists">
            <li><NavLink to='/' className='navbar-link home-link' onClick={()=> setMenuIcon(false)}>Home</NavLink></li>
            <li><NavLink to='/about' className='navbar-link' onClick={()=> setMenuIcon(false)}>About</NavLink></li>
            <li><NavLink to='/contact' className='navbar-link' onClick={()=> setMenuIcon(false)}>Contact</NavLink></li>
            <li><NavLink to='/products' className='navbar-link' onClick={()=> setMenuIcon(false)}>Product</NavLink></li>
           
            <li><a href='tel:7600256770'><Button className='callbtn'><MdPhoneCallback className='icon'/>CALL NOW</Button></a></li>
           </ul> 

           {/* two button for open and close of menu */}
           <div className="mobile-navbar-btn">
            <CgMenu name='menu-outline' className='mobile-nav-icon' onClick={()=> setMenuIcon(true)}/>
            <CgClose name='close-outline' className='mobile-nav-icon close-outline' onClick={()=> setMenuIcon(false)}/>
            
            {/* <CgMenu name='menu-outline' className='mobile-nav-icon'/>
            <CgClose name='close-outline' className='mobile-nav-icon close-outline'/> */}
            
           </div>
        </div>
     </Nav>
    </>
  )
}
