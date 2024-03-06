import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import {  FaFacebookF,FaInstagram, FaYoutube } from "react-icons/fa";
import {MdPhoneCallback,MdEmail,MdLocationOn} from 'react-icons/md'
import { useFormik } from 'formik';
import { footerMessage } from '../schemas/FooterMessage';


export default function Footer() {

const initialValues = {
  message:'',
  number:''
}
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:footerMessage,
    onSubmit : (values,action)=>{
      let url = "https://wa.me/7600256770?text="
      +"*Phone No.: *"+values.number+"%0a"
    +"*Message: *"+values.message+"%0a"

    window.open(url,'_blank').focus()
      action.resetForm()
    }
  })

  return (
    <>
     <Wrapper>
        <section className="contact-short">
            <div className="grid grid-two-column grid-btn">
                <div>
                    <h3>Ready to get started?</h3>
                    <h3>Talk to us today</h3>
                </div>
            </div>
            <Button><NavLink to='/contact'>Get Started</NavLink></Button>
        </section>
        {/* main footer */}
        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about footer-h3">
                    <h3>About us</h3>
                    <ul>
                      <li><NavLink to='/products'><h3>Our products</h3></NavLink></li>
                      <li><NavLink to='/about'><h3>About our company</h3></NavLink></li>
                      <li><NavLink to='/contact'><h3>Contact us</h3></NavLink></li>
                      {/* <li><NavLink to='/products'><h3>Our Services</h3></NavLink></li> */}


                    </ul>
                      </div>

                      {/* <div className="footer-subscribe footer-h3">
                    <h3>Subscribe to get important updates</h3>
                    <form ref={form}>
                        <input type="email" placeholder='your e-mail' value={message} onChange={(e)=>setmessage(e.target.value)} />
                        <input type="submit" value='subscribe' onClick={()=>whatsapp()} />
                    </form>
                </div> */}

                <div className="footer-subscribe footer-h3">
                    <h3>Requirement Details</h3>
                    <input type="text" 
                      value={values.number} 
                      name="number"
                      onChange={handleChange} placeholder='Mobile Number'/>
             {errors.number && touched.number ? (<p className='form-error'>{errors.number}</p>) : null}
                    <form onSubmit={handleSubmit}>
                      <textarea
                      value={values.message} 
                      name="message"
                      cols="25" rows="5" onChange={handleChange} placeholder='Additional details about your requirements..'></textarea>
               {errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>) : null}

                      <Button type='submit'>Submit</Button>
                    </form>
                </div>

                <div className="footer-social footer-h3">
                    <h3>follow us</h3>
                    <div className="footer-social--icons">
                        <div>
                        <a href="https://www.facebook.com/profile.php?id=100079513167345" target='_blank' rel="noreferrer">
                            <FaFacebookF className='icons'/>
                            </a>
                        </div>

                        <div>
                        <a href="https://www.instagram.com/veera_exports/"  target='_blank' rel="noreferrer">
                            <FaInstagram className='icons'/>
                            </a>
                        </div>

                        <div>
                            <a href="https://www.youtube.com/@veera_mini_oil_mill" target='_blank' rel="noreferrer">
                                <FaYoutube className='icons'/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="footer-social footer-h3">
                    <h3>Contact</h3>
                    <div className="footer-social--icons">
                        <div>
                        <a href="tel:7600256770">
                            <MdPhoneCallback className='icons'/>
                        </a>
                        </div>

                        <div>
                        <a href="mailto:pragnesh76760@gmail.com">
                            <MdEmail className='icons'/>
                            </a>
                        </div>

                        <div>
                        {/* https://goo.gl/maps/Nj1uLkWZXysPWtdU6 */}
                            <a href="https://www.google.com/maps/place/Veera+Exports/@21.934422,70.828564,15z/data=!4m5!3m4!1s0x0:0x22b212044dca4f08!8m2!3d21.934422!4d70.8285635?hl=en" target='_blank' rel="noreferrer">
                               <MdLocationOn className='icons'/>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* <div className="footer-contact  footer-h3">
                <div className='footer-contact-call'>
                  <div className='icon'>
                  <MdPhoneCallback className='icons'/>
                  </div>
                  <div className='text'>
                  <a href='tel:7600256770'>+91 7600256770</a>
                  </div>
                </div>
                <div className='footer-contact-call'>
                  <div className='icon'>
                  <MdEmail className='icons'/>
                  </div>
                  <div className='text'>
                  <a href='mailto:pragnesh76760@gmail.com'>pragnesh76760@gmail.com</a>
                  </div>
                </div>
                <div className='footer-contact-call'>
                  <div className='icon'>
                  <MdLocationOn className='icons'/>
                  </div>
                  <div className='text'>
                  <a href='https://www.google.com/maps/place/Veera+Exports/@21.934422,70.828564,15z/data=!4m5!3m4!1s0x0:0x22b212044dca4f08!8m2!3d21.934422!4d70.8285635?hl=en'>
                    Veera Exports,Movia road,Near vivah party plot,gondal-360311</a>
                   </div>
                </div>
                    
                  
            
                  </div>*/}
            </div> 

            {/* bottom footer  */}
            <div className="footer-bottom-section">
                <hr style={{color:'grey'}}/>
                <div className="container grid grid-two-column">
                    <p>@{new Date().getFullYear()} veeraexports. All Rights Reserved</p>
                    <div>
                        <p>PRIVACY POLICY</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </footer>
     </Wrapper> 
    </>
  )
}
const Wrapper = styled.section`
  .iSIFGq {
    margin: 0;
  }
  .social{
    padding:1rem;
  }
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 9rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }
  
  footer {
    padding: 14rem 0 9rem 0;
    gap:5rem;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-subscribe textarea{
      margin:1rem;
      margin-left:0
    }
    .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .footer-contact-call .icon {
	float: left;
	font-size: 25px;
	margin-right: 5px;
}
.footer-contact-call .text {
	font-size: 17px;
	padding-top: 5px;
}
    .footer-social--icons {
      display: flex;
      gap: 2rem;
      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }
  .footer-bottom--section {
    padding-top: 9rem;
    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(45%);
      text-align: center;
      margin-top: -160px;
      .grid div:last-child {
        justify-self: center;
      }
    }
   
    footer {
      padding: 9rem 0 9rem 0;
    }
    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;