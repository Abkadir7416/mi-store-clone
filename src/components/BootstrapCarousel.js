import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap'


const BootstrapCarousel = ({start}) => {
  return (


    <Carousel fade>
        {
            start.map((item) => (
        <Carousel.Item>
            
            <img
            className="d-block w-100"
            src={item}
            alt="Slide 1"
            />
        </Carousel.Item>

            ))
        }
        
    </Carousel>
  )
}

export default BootstrapCarousel
