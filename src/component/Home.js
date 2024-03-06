import React from 'react'
import styled from 'styled-components';
import FeatureProducts from './FeatureProducts';
import HeroSection from './HeroSection';
import Services from './Services';
import Trusted from './Trusted';

export default function Home() {
  const data = {
    name:'Veera Exports'
  }
  return (
    <Wrapper>
    <HeroSection mydata = {data}/>    
    <FeatureProducts/>
    <Services/>
    <Trusted/>
    </Wrapper>
  )
}
const Wrapper = styled.section`
${'' /* height:100vh; */}
${'' /* background-color:${({theme})=>theme.colors.bg} */}
`