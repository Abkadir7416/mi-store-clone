import React from 'react'
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Slider = ({start}) => {

  return (
    <div>
        <Carousel fade>
        {
            start.map((item, index) => (
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
    </div>
  )
}

export default Slider