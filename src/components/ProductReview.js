import React from 'react'
import ProductReviewsCard from './ProductReviewsCard.js'
import '../styles/ProductReviews.css'

const ProductReview = ({productReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            productReviews.map((item, index) =>(
                <ProductReviewsCard index={index} key={item.image} name={item.name} image={item.image} review={item.review} price={item.price} />
            ))
        }
    </div>
  )
}

export default ProductReview;