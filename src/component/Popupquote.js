import React from 'react'
import styled from "styled-components";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { Button } from '../styles/Button';
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';

export default function Popupquote({names,image}) {
  
const initialValues = {
  name:'',
  message:'',
  products:names,
  quantity:'',
  number:''
}
  const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit : (values,action)=>{
      let url = "https://wa.me/7600256770?text="
    +"*Message: *"+values.message+"%0a"
    +"*Name: *"+values.name+"%0a"
    +"*Phone: *"+values.number+"%0a"
    +"*Products*"+values.products+"%0a"
    +"*Quantity: *"+values.quantity+"%0a"


    window.open(url,'_blank').focus()
      action.resetForm()
    }
  })
  return (
    <Wrapper>
    
    <div className="container">
    <div className="title">
        <h2>{names}</h2>
        <h3>Tell us about your requirements</h3>
    </div>
    <div className="grid grid-two-column">
        <div className="imagestyle">
                <div className='image-border'><img src={image} alt={values.name} className="images" />
                </div>
        </div>
        <div className="contact-form">
          <form className="contact-inputs" onSubmit={handleSubmit}>{/* ref=form */}  
          <div className="input-block">
                <label htmlFor="message" className='input-label'><h4>Product Description</h4></label>
                <InputGroup size='lg'>
                <Form.Control as="textarea" className='textareainput'
                name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Please include product name,order quantity,usage,special requests if any in your inquiry..'
            cols={30} rows={5}
            aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
            />
                </InputGroup>
                {errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>) : null}

        </div>
        <div className="input-block"> 
            <label htmlFor="name" className='input-label'><h4>Full Name*</h4></label>
            <InputGroup size="lg" className='input'>
        <Form.Control
         value={values.name} 
         name="name"
         onChange={handleChange}
         onBlur={handleBlur}
        placeholder='Please type what you are looking for..'
        aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}
</div>
    <div className="input-block">

      <label className='input-label'><h4>Products*</h4></label>
      <InputGroup size="lg" className='input'>
        <Form.Control
        name="products"
         value={values.products} 
        aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
    </div>
    <div className="input-block">
    <label className='input-label'><h4>Quantity*</h4></label>
      <InputGroup size="lg" className='input'>
        <Form.Control 
        value={values.quantity} 
        name="quantity"
        onChange={handleChange}
         onBlur={handleBlur}
        placeholder='Quantity' 
        aria-label="Large"
        aria-describedby="inputGroup-sizing-sm"  
    />
    </InputGroup>
    {errors.quantity && touched.quantity ? (<p className='form-error'>{errors.quantity}</p>) : null}
    </div>
    <div className="input-block">
        <label className='input-label'><h4>Phone number*</h4></label>
        <InputGroup size="lg" className='input'>
          <Form.Control
         value={values.number} 
         name="number"
        onChange={handleChange}
         onBlur={handleBlur}
        placeholder='Phone number'
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
        />
      </InputGroup>
      {errors.number && touched.number ? (<p className='form-error'>{errors.number}</p>) : null}
    </div>
           <Button type='submit'>SEND</Button>
          </form>
          </div>
        </div> 
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 0;
.title{
  text-align:center;
}
.textareainput::placeholder{
  color: #ccc;
    opacity: 1;
}
.input-label {
    font-size: 11px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.7px;
    color: #8c7569;
    transition: 0.3s;
  }
  .input-block {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 8px;
    ${'' /* border: 1px solid #ddd; */}
    border-radius: 4px;
    margin-bottom: 5px;
    transition: 0.3s;
  }
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .input-block input {
    outline: 0;
    border: 0;
    padding: 4px 0 0;
    font-size: 14px;
  }
  .input-block input::-moz-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input:-ms-input-placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block input::placeholder {
    color: #ccc;
    opacity: 1;
  }
  .input-block:focus-within {
    border-color: #8c7569;
  }
  .input-block:focus-within .input-label {
    color: rgba(140, 117, 105, 0.8);
  }

.image-border{
  border:1px solid;
  height:30rem;
  width:35rem;
  ${'' /* box-shadow: 8px 4px 3px grey; */}
}
.imagestyle{
  margin-top:3rem;
  padding:1.5rem;
}
  .images{
    height:30rem;
    width:35rem;
    ${'' /* border:1px solid; */}
  }
  .selectinput{
    
    font-size:1.5rem;
  }
  .input{
    height:5rem;
  }
  .productinput{
    height:5rem;
    width:25rem;
  }
  .qntyinput{
    height:5rem;
  }
  h4{
    float:left;
  }
.container {
  margin-top: 1rem;
 .imageshow{
  float:left;
 }
  
  .card {
    border: 0.1rem solid rgb(170 170 170 / 40%);
    .card-data {
      padding: 0 2rem;
    }
    h3 {
      margin: 2rem 0;
      font-weight: 300;
      font-size: 2.4rem;
      text-transform: capitalize;
    }
    .btn {
      margin: 2rem 0;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      color: rgb(98 84 243);
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
    .btn-main .btn:hover {
      color: #fff;
    }
  }
  
  .grid {
    gap: 2.2rem;
  }
  .contact-form {
    max-width: 50rem;
    margin: auto;
    ${'' /* margin-right:2rem; */}
    float:right;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      width:35rem;
      ${'' /* gap: 1rem; */}
      
      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
@media (max-width: ${({ theme }) => theme.media.mobile}) {
.imagestyle{
  margin-left:8rem;
}
}
`;
