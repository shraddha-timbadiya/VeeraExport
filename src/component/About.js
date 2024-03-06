import React from 'react'
import styled from 'styled-components'

export default function About() {

  return (
    <>
     <Wrapper>
        <div className="container">
            <div className="grid">
                <div className="hero-section-data">
          <h1>About Us</h1>
                  
                    <p>It was in <span style={{color:'#5C81F8'}}>2022</span>
                    that we began <span  style={{color:'#5C81F8'}}> our journey </span>, a journey where every milestone said
                    <span  style={{color:'#5C81F8'}}> Rukna Mat! </span> it was a journey to take <span  style={{color:'#5C81F8'}}> Ghar Ka Khana </span>
                    from <span  style={{color:'#5C81F8'}}> good to great </span>,kyun ki hum sirf <span  style={{color:'#5C81F8'}}> 'good' pe nahi rukte!</span>
                    .</p>
                    <p> Best quality oil at the best rates to the customers' was his approach, which eventually became the mission of the brand. For over 5 decades, we have been serving our customers with quality oil in the purest form.</p>

                   <h3> OUR MOTTO AND BELIEF</h3>
                  <p>Best quality oil at the best rates to the customers.</p>
                  <p>The harmony of a healthy mind, hearty soul and positive thoughts lead to a joyous life. All this essentially begins with healthy food. Years of nurturing & using the traditionally sound methods of extracting oil at Rajkamal explains our endeavor to stay connected with Mother Nature, and at the same time helping provide our customers with chemical free & nutrient rich oil, ensuring their overall well-being.
The Tattva of the Fire, Earth, Wind. Water and Space, is what we believe in and the same reflects in our logo. We are nothing but the land that allows the seed to grow and are proud to be the medium through which the nature's gift reaches the customer's hands!</p>
                </div>
            </div>
            
        </div>
      </Wrapper>

    </>
  )
}

const Wrapper = styled.section`
padding: 4rem 0;
.slide{
  height: 400px;
    width: 100%;
    background-image: url(images/plant1.png);
    background-repeat: no-repeat;
    background-position: left top;
    background-size:100% 100%; 
    margin:0;
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:rgba(149,157,165,0.2)0,0.8rem,2.4rem;
    ${'' /* animation:image 20s linear infinite; */}
}
@keyframes image{
  0%{
    background-image:url(./images/plant.png)
  }
  25%{
    background-image:url(./images/plant.png)
  }
  50%{
    background-image:url(./images/plant.png)
  }
  75%{
    background-image:url(./images/hero.jpg)
  }
  100%{
    background-image:url(./images/plant.png)
  }
}
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
h1 {
      text-transform: capitalize;
      font-weight: bold;
      color:#425368;
    }
    
  img {
    min-width: 10rem;
    height: 10rem;
  }
  .hero-section-data {
  h3,h1{
    display:flex;
      justify-content:center;
      color:#5C81F8;
      align-items:center;
  
  }
    p{
      margin: 2rem 0;
      font-family: "Times New Roman", Times, serif;

    }
    .intro-data {
      margin-bottom: 0;
    }
  }
  .hero-section-image {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  figure {
    position: relative;
    &::after {
      content: "";
      width: 60%;
      height: 80%;
      background-color: rgba(81, 56, 238, 0.4);
      position: absolute;
      left: 50%;
      top: -5rem;
      z-index: -1;
    }
  }
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
      top: 10%;
      /* bottom: 10%; */
      background-color: rgba(81, 56, 238, 0.4);
    }

    .hero-section-data {
      margin-bottom: 50px;
    }
  }
`;
