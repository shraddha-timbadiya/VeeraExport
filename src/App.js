//hoisting in netlify,domain in auth0
import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import About from "./component/About";
import Cart from "./component/Cart";
import ErrorPage from "./component/ErrorPage";
import Home from "./component/Home";
import SingleProduct from "./component/SingleProduct";
import Contact from "./component/Contact";
import { GlobalStyle } from "./component/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Products from "./All_Product/AllProducts";
import GoToTop from "./component/GoToTop";
import List from "./demo/List";
import Show from "./demo/Show";
// import Single_product from "./component/Single_product";

const App = () => {

  const theme = {
    colors:{
      heading:'rgb(24,24,29)',
      text:'rgba(29,29,29,.8)',
      white:'#fff',
      black:'#212529',
      helper:'#8490ff',

      bg:'#d8e0e8',
      footer_bg:'#0a1435',
      btn:'rgb(98,84, 243)',
      border:'rgba(98,84,243,0.5)',
      hr:'ffffff',
      gradiant:'linear-gradient(0deg,rgb(132,144,255) 0%,rgb(98,189,252)100%)',
      shadow:'rgba(0,0,0,0.2) 0px 1px 3px 0px.rgba(27,31,35.0.15)0px 0px 0px 1px;',
      shadowSupport:'rgba(0,0,0,0.16)0px 1px 4px',
    },
    media:{
      mobile:'768px',
      tab:'998px',
    },

  };
  return <>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle/>
      <Header/>
      {/* <List/> */}
      <Routes>
<Route path="/show/:id" element={<Show/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/singleproduct/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<Cart/>}/>

        <Route path="*" element={<ErrorPage/>}/>

      </Routes>
      <GoToTop/>

      <Footer/>

    </BrowserRouter>
</ThemeProvider>
  </>;
};

export default App;
