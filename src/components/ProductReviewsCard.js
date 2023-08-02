import React from 'react'
import '../styles/ProductReviewCard.css'

const ProductReviewsCard = ({index, name, price, image, review}) => {

  return (
    <div className='productReviewsCard'>
        <img src={image}  />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewsCard;