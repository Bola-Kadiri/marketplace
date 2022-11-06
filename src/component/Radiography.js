import React, {useState, useEffect} from 'react'
import './Radiography.css'
import {BiVideoRecording} from 'react-icons/bi'
import { FaTimes } from 'react-icons/fa';

import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Radiography = () => {
   useEffect(() => {
       Aos.init({duration: 2000});
    }, [])
  const [radio, setRadio] = useState(false)
  const handleRadio=()=>{
    setRadio(!radio)
  }
  const  radioClose=()=>{
    setRadio(!radio)
  }
  return (
    <div className='radiography'>
    <div radio-content>
        <div id="element">
            <div id="overlay">
                <div className='overlay-content-1'>
                   <h1 className='radio-header'>The world's best moments, captured for you.</h1>
                   <p>Buying stock images from us, you're supporting photographers by
                    ensuring they receive the majority of royalties so they can continue to bring you their best work.</p>
                    <div className='photo-btn-1'>
                    <li className='connect-1'><Link to='/PhotoConnet'>Connect</Link></li>
                    <li className='contribute-1' onClick={handleRadio}><Link to='#'>Become</Link></li>
                </div>
                
                </div>
                
            </div>
           <div className={radio ? 'modal-1' : 'modal-not-1'}>
              <form className='form'>
              <span style={{position: 'absolute', right: '20px', cursor: 'pointer', top: '20px'}} onClick={radioClose}><FaTimes /></span>
                  <input type='text'/>
                  <input type='text'/>
                  <input type='password'/>
                  <button>Submit</button>
              </form>
           </div>
        </div>
        <div className='radio' data-aos='fade-up'>

           <div className='radio-icon'>
                <div className='radio-stack2'>
                  <BiVideoRecording style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                  <h3>Built for Creators</h3>
                  <p>The highest quality images and unbeatable (95%) royalties for contributors.</p>
                </div>
                <div className='radio-stack2'>
                  <BiVideoRecording style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                  <h3>Powered by Apnadevs</h3>
                  <p>All transactions are executed on-chain with NFTs on the Apnadevs Network.</p>
                </div>
                <div className='radio-stack2'>
                  <BiVideoRecording style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                  <h3>Simple Payments</h3>
                  <p>Get paid easily and withdraw right to your bank account.</p>
                </div>
           </div>
        </div>
        <div className='radio2'  data-aos='flip-left' data-aos-easing='ease-out-cubic'>
        <h1>How it works</h1>
        <div className='radio2-icon'>
             <div className='radio2-stack3'>
              
               <h3>Premium Contributors</h3>
               <p>All contributors are screened for the highest quality so we can curate the best collection to support your creative projects.</p>
             </div>
             <div className='radio2-stack3'>
               
               <h3>Payment Compatible</h3>
               <p>Every license can be paid up front and directly to your wallet. Withdraw anytime directly to your bank account.</p>
             </div>
             <div className='radio2-stack3'>
               
               <h3>Content minted as NFTs</h3>
               <p>All content and licenss proof
                of ownership and permanence. NFTs can be sold along with master rights at any time.</p>
             </div>
             <div className='radio2-stack3'>
               
             <h3>Manage your portfolio</h3>
             <p>Your real-time valid or expiring. Contributors see future earnings and focus on delivering high demand content.</p>
           </div>
        </div>
        </div>
       
    </div>

</div>
  )
}

export default Radiography