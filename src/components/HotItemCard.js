import React from 'react'
import '../styles/HotItemCard.css'

const HotItemCard = (item, image, index, name , price) => {
    console.log("item ", item);
    console.log("image ", image);
    console.log("index ", index);
    console.log("price ", price);
    console.log("name ", name);
  return (
    <div className='HotItemCard'>
        <img src={item.item.image} alt={`1 ${index} 1 {product}`} />
        <p>{item.item.name}</p>
        <span>{item.item.price}</span>
    </div>
  )
}

export default HotItemCard