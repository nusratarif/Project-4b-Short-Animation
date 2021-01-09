import React from 'react';
import img1 from './Images/online.png';


const Contact = () => {
    const [state] = React.useState([
        
        { id:1, title: "Email:", text: "dummy12@gmail.com"},
        { id:2, title: "Phone:", text: "+1 243 485 987"},
        
    ])
    return (
        <div className="contact">
        <div className="container">
        <div className="common"data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
                 <h1 className="contact-heading">Contact Us</h1> 
                                            
                
              </div> 
          <div className="row h-123 alignCenter" >
              <div className="col-6">
              <div className="contact-img" data-aos="fade-left" data-aos-duration="3000"  data-aos-easing="linear">
              <img src={img1} alt="travel" height="500" />
         </div>   
              </div>
              <div className="col-6">
                  <div className="about__info"data-aos="flip-right"  data-aos-duration="3000"  data-aos-easing="linear">
                      
                      <div className="info__contacts">
                          <div className="row">
                              {state.map((info) =>(
                                <div className="col-6">
                                    <strong>{info.title}</strong>
                                    <p>{info.text}</p>
                                </div>
                              
                              ))}
                              
                              
                          </div>
    
                      </div>
                  </div>

              </div>
         </div>          
        </div>   
    </div>
    )
}

export default Contact;
 