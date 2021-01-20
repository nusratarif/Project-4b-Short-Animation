import React from 'react';
import img1 from './Images/travel.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Header = () => {
    return (
        <header className="header">
        <div className="container">
            <div className="row">
                <div className="col-6">
                    
                <div className="header__content">
                    <div className="header__section" data-aos="fade-right" data-aos-duration="3000"  data-aos-easing="linear">
                   
                    
                    <div className="p">
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                       Vivamus tempus ex a diam aliquam ornare. Donec feugiat,
                       urna ut finibus faucibus.Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit.
                       Vivamus tempus ex a diam aliquam ornare. Donec feugiat,
                       urna ut finibus faucibus.
                     </p>
                    </div>                                      
                      
                    </div>                   
                </div>
                </div>
                <div className="col-6">
                  <div className="header-img" data-aos="fade-left" data-aos-duration="3000"  data-aos-easing="linear">
                     <img src={img1} alt="travel" height="400" />
                  </div>  
                                    
                </div>
            </div>
        </div> 


     </header>
    )
}

export default Header
