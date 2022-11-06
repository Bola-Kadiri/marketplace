import React, {useState} from 'react'
import './TeamSection.css'
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { RiArrowDownSLine } from 'react-icons/ri';
import { RiArrowUpSLine } from 'react-icons/ri';
const TeamSection = () => {
    const [info, setInfo] = useState(false)
    const [info2, setInfo2] = useState(false)
    const [info3, setInfo3] = useState(false)
  return (
    <div id='team-grapher'>
         <div className='team-grapher-content'>
            <h3>Here are some frequently asked questions about our service from our loving 
                customers. Should you have any other questions, feel free to reach out via 
                support@nuledge.com.
            </h3>
             <div className='top-handler' onClick={()=>setInfo(!info)}>
             <div className='top-handler-content'>
                <h2>What is all this all about</h2>
                <span >{info ? <RiArrowDownSLine/>  : <RiArrowUpSLine />}</span>
             </div>
             <p className={info ? 'show' : 'show-not'}>plan and book your perfect slot, with expert advice and inspiration 
             from usplan and book your perfect slot, with expert advice and inspiration from us
             plan and book your perfect slot, with expert advice and inspiration from us</p>
         </div>
         <div className='top-handler-1' onClick={()=>setInfo2(!info2)}>
         <div className='top-handler-content-1'>
            <h2>What is all this all about</h2>
            <span >{info2 ? <RiArrowDownSLine/>  : <RiArrowUpSLine />}</span>
         </div>
              <p className={info2 ? 'show-1' : 'show-not-1'}>plan and book your perfect slot, with expert advice and inspiration 
              from usplan and book your perfect slot, with expert advice and inspiration from us
              plan and book your perfect slot, with expert advice and inspiration from us</p>
     </div>
     <div className='top-handler-2' onClick={()=>setInfo3(!info3)}>
     <div className='top-handler-content-2'>
        <h2>What is all this all about</h2>
        <span >{info3 ? <RiArrowDownSLine/>  : <RiArrowUpSLine />}</span>
     </div>
          <p className={info3 ? 'show-2' : 'show-not-2'}>plan and book your perfect slot, with expert advice and inspiration 
          from usplan and book your perfect slot, with expert advice and inspiration from us
           plan and book your perfect slot, with expert advice and inspiration from us</p>
 </div>
         </div>
    </div>
  )
}

export default TeamSection