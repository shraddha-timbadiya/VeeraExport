import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import styled from 'styled-components'

export default function GoToTop() {
    const GoToTop = ()=>{
        window.scrollTo({top:0,left:0,behavior:"smooth"})
    }
  return (
    <Wrapper>
      <div className="btn" onClick={GoToTop}><FaArrowUp className='top-btn icon'/></div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
display:flex;
justify-content:center;
align-items:center;

.top-btn {
    font-size:2.4rem;
    width:5rem;
    height:5rem;
    color:#fff;
    background-color:${({theme}) => theme.colors.btn};
    box-shadow:${({theme}) =>theme.colors.shadow};
    border-radius:50%;
    position:fixed;
    bottom:5rem;
    right:5rem;
    z-index:999;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    ${'' /* animation:gototop 1.2s linear infinite alternate-reverse; */}

}
.icon{
    animation:gototop 1.2s linear infinite alternate-reverse;
    height:4rem;
    width:4rem;

}
@keyframes gototop{
    0%{
        transform:translateY(-0.5rem);
    }
    100%{
        transform:translateY(1rem);
    }
}
`
