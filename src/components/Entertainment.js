import React from 'react'
import img1 from './Images/hotel.jpeg';
import img2 from './Images/Dinner.jpeg';
import img3 from './Images/bus.png';
import img4 from './Images/park2.jpeg';
import img5 from './Images/camping.jpeg';
import img6 from './Images/beach.jpeg';
import img7 from './Images/boating.jpeg';
import img8 from './Images/hiking.png';
import img9 from './Images/kids.png';
// import img10 from './Images/';
function Entertainment() {
    
    return (
        <div className="facilities">
            <div className="container" data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
            <div className="Entertainment">
            <div className="common">
            <h1>Facilities For You...</h1> 
             
            </div>
            <div className="Entertainment-img" data-aos="zoom-in" data-aos-duration="3000"  data-aos-easing="linear">
            <div className="img-box">
               <img className="img1" src={img1} alt="P1" height="300" width="300"/>
               
               <h4>Five Star Hotel</h4>
               
            </div>
            <div className="img-box">
               <img className="img2" src={img2} alt="P2" height="300" width="300" />
               <h4>Meals</h4>
               
            </div>
            <div className="img-box">
                <img className="img3" src={img3}alt="P3" height="300" width="300"/>
                <h4>Road Trip</h4>
                
            </div>
            <div className="img-box">
                <img className="img4" src={img4}alt="P4" height="300" width="300"/>
                <h4>Amusement Park</h4>
                
            </div>
            <div className="img-box">
                <img className="img5" src={img5} alt="P1" height="300" width="300"/>
                <h4>Camping</h4>
               
            </div>
            <div className="img-box">
                <img className="img6" src={img6} alt="P1" height="300" width="300"/>
                <h4>Beach Party</h4>
               
            </div>
            <div className="img-box">
                <img className="img7" src={img7} alt="P1" height="300" width="300"/>
                <h4>Boating</h4>
               
            </div>
            <div className="img-box">
                <img className="img8" src={img8} alt="P1" height="300" width="300"/>
                <h4>Hiking</h4>
               
            </div>
            <div className="img-box">
                <img className="img9" src={img9} alt="P1" height="300" width="300"/>
                <h4>Make New Friends</h4>
               
            </div>
            </div>
            
            

           
            </div>
            </div>
            
        </div>
    )
}

export default Entertainment
