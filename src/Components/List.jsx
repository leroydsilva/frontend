import React from 'react'
import { FaBatteryHalf, FaMemory,FaMobileAlt,FaMicrochip, FaCameraRetro,FaCamera , FaSignal, FaRupeeSign } from 'react-icons/fa';

const List = ({image, price, name, screen, ram, storage, processor, fcam, rcam, rating, fiveg, Battery}) => {
  const ratingClassName = `phone-rating phone-rating--${rating}`;
  return (
    <div className="phone-container">
      <div className={ratingClassName}>
          <div className="phone-rating">{rating}</div>
      </div>
      <div className="phone">
        <div className="image-container">  
          <img src={image} alt="Phone" className="phone-image" />
        </div>
        <div className="phone-details">
          <div className="phone-title">{name}</div>
          <div className="phone-price">
            <FaRupeeSign className="icon" />
            {price}
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaMobileAlt />
            </div>
            <div className="data">{screen} inches</div>
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaMemory />
            </div>
            <div className="data">
              {ram} RAM, {storage} Storage
            </div>
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaBatteryHalf />
            </div>
            <div className="data">{Battery} mAh Battery</div>
          </div>
          {/* <div className="phone-specs">
                <FaExpand className="icon" /> 1080p Resolution
              </div> */}
          <div className="phone-specs">
            <div className="icon">
              <FaMicrochip />
            </div>
            <div className="data">{processor} Processor</div>
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaCamera/>
            </div>
            <div className="data">{fcam} Front Camera</div>
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaCameraRetro />
            </div>
            <div className="data">{rcam} Rear Camera</div>
          </div>
          <div className="phone-specs">
            <div className="icon">
              <FaSignal />
            </div>
            <div className="data">{fiveg ? '5G Enabled' : '4G Enabled'}</div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default List