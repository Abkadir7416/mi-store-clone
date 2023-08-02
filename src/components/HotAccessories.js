import React from 'react';
import HotItemCard from './HotItemCard';
import '../styles/hotAccessories.css'



const HotAccessories = ({music, musicCover, smartDevice, smartDeviceCover, home , homeCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover}) => {
    console.log("smart devices hotaccessories ", smartDevice);
  return (
    <div className='hotAccessories'>
        <div>
            <img src={musicCover || smartDeviceCover || homeCover || lifeStyleCover || mobileAccessoriesCover} alt='Cover' />
        </div>

        <div>
            {
                (music && music.map((item, index)=>(
                    
                    <HotItemCard key={item.image} item={item} names={item.name} prices={item.price} images={item.image} />
                )))
            }

            {
                (smartDevice && smartDevice.map((item, index)=>(
                    
                    <HotItemCard key={item.image} item={item} names={item.name} prices={item.price} images={item.image} />
                )))
                
            }

            {
                (home && home.map((item, index)=>(
                    
                    <HotItemCard key={item.image} item={item} names={item.name} prices={item.price} images={item.image} />
                )))
                
            }

            {
                (lifeStyle && lifeStyle.map((item, index)=>(
                    
                    <HotItemCard key={item.image} item={item} names={item.name} prices={item.price} images={item.image} />
                )))
                
            }

            {
                (mobileAccessories && mobileAccessories.map((item, index)=>(
                    
                    <HotItemCard key={item.image} item={item} names={item.name} prices={item.price} images={item.image} />
                )))
                
            }
        </div>

        
    </div>
  )
}

export default HotAccessories;