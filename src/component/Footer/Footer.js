import React from 'react'
import './Footer.css'
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-content'>
          <div className='footer-content-one'>
             <h1>Market</h1>
             <p>Nuledge is an Internet Technology company providing affordable and easy-to-use digital solutions to schools.
             </p>
             <div className='icon'>
                <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>
                <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                <svg className='icons' xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 24 24" fill="none" stroke="green" stroke-width="2" stroke-linecap="square" stroke-linejoin="round"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
             </div>
          </div>
          <div className='footer-content-two'>
            <p>Quick Links</p>
            <li><Link to='/team' className='link'>Team</Link></li>
           <li><Link to='/radiography' className='link'>Videography</Link></li>
           <li><Link to='/photography' className='link'>Photography</Link></li>
          </div>
   
            
        </div>
    </div>
  )
}

export default Footer