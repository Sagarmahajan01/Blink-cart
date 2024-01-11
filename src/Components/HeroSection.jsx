import './Style.css'
import {Link} from 'react-router-dom'
const HeroSection = () => {
    return (
        <div className="heroContainer">
                     <div className="heroLeft">
                              <h1 className='heroHeading'> &nbsp; Where Every Click Sparks a Shoppers Delight! </h1>
                              <p>BlinkCart: Elevate Your Shopping, One Click at a Time!</p>
                      <span>
                      <Link to='/Products'><button className='heroBTN '>Shop Now</button></Link>    
                           <Link to='/Products'><button className='heroBTN2 hide'>Explore More</button></Link>  
                        </span>        
                           
                     </div>
                     <div className="heroRight">
                                 <img src="./images/logo.png" alt="" />
                     </div>
        </div>

    );
}

export default HeroSection;
