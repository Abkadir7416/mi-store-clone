import React from 'react'

const Offer = ({src, link, index}) => {
    // console.log("item ", item);
    // console.log("index ", index);
    // console.log("src ", src);
    // console.log("link ", link);
  return (
    <a href={link}> <img src={src} alt={`${index} offer`} /></a>
  )
}

export default Offer;