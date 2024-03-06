import styled from "styled-components";
import { FaPhoneAlt,FaEnvelope,FaMapMarkerAlt,FaHome} from "react-icons/fa";
import { useFormik } from 'formik';
import { contactSchema } from "../schemas/Contact";

const Contact = () => {  
  const initialValues = {
    name:'',
    email:'',
    address:'',
    city:'',
    message:'',
    number:''
  }
    const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({
      initialValues:initialValues,
      validationSchema:contactSchema,
      onSubmit : (values,action)=>{
        let url = "https://wa.me/7600256770?text="
      +"*Message: *"+values.message+"%0a"
      +"*Name: *"+values.name+"%0a"
      +"*Phone: *"+values.number+"%0a"
      +"*Email:*"+values.email+"%0a"
      +"*Address: *"+values.address+"%0a"
      +"*City: *"+values.city+"%0a"

      window.open(url,'_blank').focus()
        action.resetForm()
      }
    })
  
  return <Wrapper>
  {/* <h2 className="common-heading">Contact Page</h2> */}
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3701.003367707869!2d70.82637481467438!3d21.934421985514877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958417ea11c10b9%3A0x22b212044dca4f08!2sVeera%20Exports!5e0!3m2!1sen!2sin!4v1668768311489!5m2!1sen!2sin"
     width="100%"
      height="400" 
      title="my map"
    style={{border:0}} 
    allowFullScreen=""
     loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"></iframe>
      <div className="container">
          <div className="contact_info">
          <h2>Contact Details</h2>
          <h4>Get in touch with us for any questions about our industries or projects.</h4>
          <FaHome className="icons"/>
          <h3>Head Office</h3>
          <p>Movia road, Near Vivah party plot-360311,Gondal</p>
          <FaMapMarkerAlt className="icons"/>
          <h3>Factory Address</h3>
          <p>Movia road, Near Vivah party plot-360311,Gondal</p>
          <FaEnvelope className="icons"/>
          <h3>Email us</h3>
          <p>pragnesh76760@gmail.com</p>
          <FaPhoneAlt className="icons"/>
          <h3>Call Support</h3>
          <p>+91 7600256770</p>
       </div>

        <div className="contact-form">
        <h3>Please provide us your complete information so that we can get back to you with best solutions.</h3>
          <form className="contact-inputs" onSubmit={handleSubmit}  >{/* ref=form */}
            <input type="text" placeholder="Full Name" name="name"
             value={values.name} 
            onChange={handleChange}
            onBlur={handleBlur}/>
        {errors.name && touched.name ? (<p className='form-error'>{errors.name}</p>) : null}

            <input type="email" name="email"  value={values.email}  
            onChange={handleChange}
            onBlur={handleBlur}
          placeholder="Email ID" />
         {errors.email && touched.email ? (<p className='form-error'>{errors.email}</p>) : null}

            <input type="phone" name="number"  value={values.number} placeholder="Phone number" 
            onChange={handleChange}
            onBlur={handleBlur}/>
         {errors.number && touched.number ? (<p className='form-error'>{errors.number}</p>) : null}

              <input type="text" name="address"  value={values.address} placeholder="Address" 
            onChange={handleChange}
            onBlur={handleBlur}/>
         {errors.address && touched.address ? (<p className='form-error'>{errors.address}</p>) : null}

              <input type="text" name="city"  value={values.city} placeholder="City" 
            onChange={handleChange}
            onBlur={handleBlur}/>
          {errors.city && touched.city ? (<p className='form-error'>{errors.city}</p>) : null}

            <textarea name="message"  value={values.message}  
            onChange={handleChange}
            onBlur={handleBlur}
             cols="30" rows="5" autoComplete="off" placeholder="Enter your requirements"></textarea>
           {errors.message && touched.message ? (<p className='form-error'>{errors.message}</p>) : null}

            <input type="submit" value="send"/>
          </form>
          
        </div>
      </div>
      
  </Wrapper>;
};
const Wrapper = styled.section`
padding: 9rem 0 5rem 0;
${'' /* text-align: center; */}
  
.container {
  margin-top: 5rem;
  .form-error {
    font-size: 1.4rem;
    color: #b22b27;
  }
  .icons{
    margin-left:23rem;
  }
  h2{
    color:white;
  }
  p{
    color:#DEE5FC ;

  }
  .social-icon{
      
  }
  .contact_info{
  background-color:#6B8BFA;
  text-align:center;
  color:#DEE5FC ;
  font-size:2rem;
  width: 50rem;
  float:right;
  margin:auto;
  max-height:auto;
  display: flex;
      flex-direction: column;
      gap: 1.5rem;
}

  
  .contact-form {
    max-width: 50rem;
    margin: left;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size:1rem;

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
@media (max-width: ${({theme})=>theme.media.mobile}){
  .container{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }

  .contact-form {
    margin-bottom: 50px;
  }
}
`;

export default Contact;
