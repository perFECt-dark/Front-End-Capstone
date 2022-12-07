import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

return (
  <div>
    {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
      return <label>
        <input type='radio'
          style={{display: 'none'}}
          name='rating'
          value={ratingValue}
          onClick={() => setRating(ratingValue)}
        />
        <FaStar size={props.size}
        color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)} ></FaStar>
      </label>
    })}
  </div>
)
}


export default StarRating;