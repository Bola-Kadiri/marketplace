import React from 'react'
import image from '../asset/Marketing.png'
import  '../About-Video/About-Video.css'

const VideoSection = () => {
  return (
    <div id='video-grapher-1'>
    <div className='video-section-inner-1'>
       <div className='video-left-1'>
          <h1>MORE THAN JUST A PHOTOSHOOT</h1>
          <p>Your adventure elopement is, in every sense of the word, yours. 
          If you want to take your wedding photos in a river then go for it! 
          No two elopements look the same. Some begin at the butt crack of dawn
          while others wait and start at noon! For that reason, our day together
          can look like whatever you dream it up to be.
         </p>
       </div>
       <img src={image} alt='myimage'/>
    </div>
</div>
  )
}

export default VideoSection