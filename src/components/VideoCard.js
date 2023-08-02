import React from 'react';
// import play from '../images/play_button.svg'
import '../styles/VideoCard.css';

const VideoCard = ({image, name, index}) => {
   const playButton = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
  //   const button  = <svg
  //   xmlns="http://www.w3.org/2000/svg"
  //   width="24"
  //   height="24"
  //   viewBox="0 0 24 24"
  //   fill="none"
  //   stroke="currentColor"
  //   strokeWidth="2"
  //   strokeLinecap="round"
  //   strokeLinejoin="round"
  // >
  //   <polygon points="5 3 19 12 5 21 5 3"></polygon>
  // </svg>;
  return (
    <div className='videoCard' style={{backgroundImage: `url(${image})`}}> 
        <a href='#/'>{playButton}</a>
        <p>{name}</p>
    </div>
    

    
  )
}

export default VideoCard