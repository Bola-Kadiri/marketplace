import React from 'react'
import {teams} from './data'
import  Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'
import './Team.css'

const Team = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='team'>
     <div className='team-content'>
      <Slider {...settings}>
       {teams.map((item)=>{
        return(
            <div className='card' key={item.id}>
            <div className='card-top'>
               <img className='image-array' src={item.image} alt={item.title}/>
               <h1>{item.title}</h1>
            </div>
            <div className='card-bottom'>
              <h3>{item.title}</h3>
            </div>
        </div>
        )
       })}
       </Slider>
         </div>
    </div>
  )
}

export default Team