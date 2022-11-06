import React, {useState, useEffect} from 'react'
import './Photography.css'
import { Link } from "react-router-dom";
import {BiVideoRecording} from 'react-icons/bi'
import {ImFilm} from 'react-icons/im'
import {SiAndroidstudio} from 'react-icons/si'
import { FaTimes } from 'react-icons/fa';

import Aos from 'aos'
import 'aos/dist/aos.css'
const Photography = () => {
  useEffect(() => {
      Aos.init({duration: 2000});
  }, [])
  const [modal, setModal] = useState(false)
  const handleModal=()=>{
    setModal(!modal)
  }
  const  handleClose=()=>{
    setModal(!modal)
  }
  return (
    <div className='radiography'>
          <div radio-content>
              <div id="element-with-background-image">
                  <div id="color-overlay">
                      <div className='overlay-content'>
                         <h1 className='radio-header'>The world's best moments, captured for you.</h1>
                         <p>Buying stock images from us, you're supporting photographers by
                          ensuring they receive the majority of royalties so they can continue to bring you their best work.</p>
                          <div className='photo-btn'>
                          <li className='connect' ><Link to='/PhotoConnet'>Connect</Link></li>
                          <li className='contribute' onClick={handleModal}><Link to='#'>Become</Link></li>
                      </div>
                      
                      </div>
                      
                  </div>
                 <div className={modal ? 'modal' : 'modal-not'}>
                    <form>
                    <span style={{position: 'absolute', right: '20px', cursor: 'pointer', top: '20px'}} onClick={handleClose}><FaTimes /></span>
                        <input type='text'/>
                        <input type='text'/>
                        <input type='password'/>
                        <button>Submit</button>
                    </form>
                 </div>
              </div>
              <div className='photo2' data-aos='fade-up'>
                 
                 <div className='photo2-icon'>
                      <div className='photo-stack2'>
                        <BiVideoRecording className='special-icon' style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <h3>Built for Creators</h3>
                        <p>The highest quality images and unbeatable (95%) royalties for contributors.</p>
                      </div>
                      <div className='photo-stack2'>
                        <ImFilm className='special-icon' style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <h3>Powered by Apnadevs</h3>
                        <p>All transactions are executed on-chain with NFTs on the Apnadevs Network.</p>
                      </div>
                      <div className='photo-stack2'>
                        <SiAndroidstudio className='special-icon' style={{fontSize: '100px', color: 'rgba(0, 0, 0, 0.5)'}}/>
                        <h3>Simple Payments</h3>
                        <p>Get paid easily and withdraw right to your bank account.</p>
                      </div>
                 </div>
              </div>
              <div className='photo3' data-aos='flip-left' data-aos-easing='ease-out-cubic'>
              <h1>How it works</h1>
              <div className='photo2-icon'>
                   <div className='photo-stack3'>
                    
                     <h3>Premium Contributors</h3>
                     <p>All contributors are screened for the highest quality so we can curate the best collection to support your creative projects.</p>
                   </div>
                   <div className='photo-stack3'>
                     
                     <h3>Payment Compatible</h3>
                     <p>Every license can be paid up front and directly to your wallet. Withdraw anytime directly to your bank account.</p>
                   </div>
                   <div className='photo-stack3'>
                     
                     <h3>Content minted as NFTs</h3>
                     <p>All content and licenses ensuring trustless proof
                      of ownership and permanence. This is rights at any time.</p>
                   </div>
                  
              </div>
              </div>
             
          </div>
  
    </div>
  )
}

export default Photography