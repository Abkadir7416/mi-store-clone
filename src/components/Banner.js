import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Banner = ({ banner }) => {
  return (

    <Carousel fade>
      {
        banner.end.map((item, index) => (
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.source}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>


  )
}

export default Banner;