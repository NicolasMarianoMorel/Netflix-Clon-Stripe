import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Nav.css";

function Nav() {

const [show, handleShow] = useState(false);
const navigate = useNavigate()
const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    }
    else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("Scroll", transitionNavBar)
  }, [])
  
  return <div className={`nav ${show && "nav__black"}`} >
    <div className='nav__contents'>

      <img
         onClick={() => navigate("/")}
         className='nav__logo' 
         /* src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' */
         src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png'
         alt='img' />

      <img 
         onClick={() => window.location.href !== "https://netflix-clone-bf301.web.app/profile" && navigate("./profile")}
         className='nav__avatar'
         src='https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png' 
         alt='avatar' />
      
    </div>
  </div>;

}

export default Nav;
