import React from 'react'
import image from '../asset/sample.jpg'
import market from '../asset/Drone-delivery.png'
import './About.css'

// MdOutlineLocalPharmacy
// BiFirstAid
// MdOutlineVideoSettings
// ImFilm
// SiAndroidstudio
// BiVideoRecording

import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import PhotoSection from '../About-Photo/PhotoSection';
import VideoSection from '../About-Video/VideoSection';
import TeamSection from '../About-Team/TeamSection';

const About = () => {
  return (
    <div className='about'>
         <div className='content'>
            <div className='header'>
                 <h1><span className='header-color'>Start your journey by one click</span>, and explore beautiful world!</h1>
                 <p>plan and book your perfect slot, with expert advice and inspiration 
                 from usplan and book your perfect slot, with expert advice and inspiration from us
                 plan and book your perfect slot, with expert advice and inspiration from us
                 </p>
                 <div className='buttom'>
                     <span className='popular'>Popular:</span>
                     <div className='buttom-link'>
                        <li><a href='#photo-grapher-1'>photographer</a></li>
                        <li><a href='#video-grapher-1'>Videographer</a></li>
                        <li><a href='#team-grapher'>Team</a></li>
                     </div>
                 </div>
            </div>
            <img src={image} alt='img' className='img'/>
         </div>
         <div className='photographer'>
              <div className='explore-icon'>
                 <img src={market} alt='img2' className='img2'/>
                 <div className='ilustration-1'>
                    <div className='ilustation-content'>
                        <h2>A whole world of freelance talent at your fingertips</h2>
                        <div className='ilus-icons'>
                           <IoIosCheckmarkCircleOutline className='react-icon' />
                           <h3>The best for every budget</h3>
                        </div>
                        <p>Find high-quality services at every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div className='ilustation-content'>
                    <h2>A whole world of freelance talent at your fingertips</h2>
                    <div className='ilus-icons'>
                       <IoIosCheckmarkCircleOutline className='react-icon'/>
                       <h3>Quality work done quickly</h3>
                    </div>
                    <p>Find the right freelancer to begin working on your project within minutes.</p>
                </div>
                <div className='ilustation-content'>
                <h2>A whole world of freelance talent at your fingertips</h2>
                <div className='ilus-icons'>
                   <IoIosCheckmarkCircleOutline className='react-icon'/>
                   <h3>24/7 support</h3>
                </div>
                <p>Questions? Our round-the-clock support team is available to help anytime, anywhere.</p>
            </div>
                 </div>
              </div>
         </div>
         <PhotoSection/>
         <VideoSection/>
         <TeamSection/>
        <div className='pricing'>
            <div  className='pricing-content'>
                 <div className='box-content'>
                     <div className='box'>
                     hfhhfh
                        <div className='box-content'>
                            <h2>Basic Plan</h2>
                            <p>$2.44/month</p>
                        </div>
                     </div>
                     <div className='box'>    
                        <div className='box-content'>
                           <h2>Silver</h2>
                        </div>
                     </div>
                     <div className='box'>
                         <div className='box-content'>
                            <h2>Gold</h2>
                        </div>
                     </div>
                 </div>
                 <div className='background'>
                     <div className='background-content'>
                         <h1>Affordable Pricing</h1>
                         <h3>Simple plans. Simple prices. Only pay for what you really need. 
                             All plans come with award-winning 24/7 customer support. Change or cancel your plan at any time.
                         </h3>
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default About