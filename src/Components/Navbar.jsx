import { useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);
  const { cart } = useContext(CartContext);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={`Navcontainer ${menuActive ? 'active' : ''}`}>
      <div className="logo">
        <Link to='/'>
          <img src="./images/site.png" alt="Logo" className='Logo' />
        </Link>
      </div>
     
      <div className="Navitems">
        <Link to='/' onClick={toggleMenu}><a href="">Home</a></Link>
        <Link to='/Products' onClick={toggleMenu}><a href="">Products</a></Link>
        <Link to='/Contact' onClick={toggleMenu}><a href="">Contact</a></Link>
        <Link to='/cart'>
          <a href="">
           
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="black" viewBox="0 0 16 16">
<path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />

            </svg>
            <span className='cartNO'>{cart.totalitems}</span>
          </a>
        </Link>
      </div>
      
       
        <button className="hamburger" onClick={toggleMenu} >
        ☰
      </button>

    </nav>
  );
}

export default Navbar;
