import React from 'react'
import img from './Images/world.png';
function Explore() {
    return (
       
        <div className="container">
         
          <div className="row" >
              <div className="col-6">
                  <div className="explore-img"  data-aos="flip-left"  data-aos-duration="3000"  data-aos-easing="linear">
                  <img src={img} alt="explore" height="400" />
                  </div>
              </div>
              <div className="col-6">
                  <div className="explor-h"data-aos="flip-right"  data-aos-duration="3000"  data-aos-easing="linear">
                  <h1>Explore Your Own World</h1>
                      
                     
                     
                  </div>

              </div>
         </div>          
        </div>   
    
    )
}

export default Explore
