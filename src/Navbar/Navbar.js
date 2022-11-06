import React, {useState} from 'react'
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import './Navbar.css'



const Navbar = () => {
  const [mobile, setMobile] = useState(false)
  const [show, setShow] = useState(false)
  const handleClick=()=>{
    setMobile(!mobile)
  }
  const handleShow = ()=>{
    setShow(!show)
  }
  return (
    <nav>
      <div className='nav'>
            <span className='mobile' onClick={handleClick}>
               {mobile ? <FaTimes/>: <FaBars/>}
            </span>
            <ul className='nav-link'>
               <div></div>
               <div className='nav-link-inner-1'> 
               <li><Link to='/'>Explore</Link></li>
               <li><Link to='#' onClick={handleShow}>Services</Link></li>
               </div>
            </ul>
      </div>
       <ul className={show ? 'show-get' : 'get'}>
       <div></div>
           <div className='inner'
         
           > 
           
           <div></div>
           <div className='nav-link-inner'>
           <li><Link to='/team'>Team</Link></li>
           <li><Link to='/radiography'>Videography</Link></li>
           <li><Link to='/photography'>Photography</Link></li>
           </div>
           </div>
       </ul>
    </nav>
  )
}

export default Navbar