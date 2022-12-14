import React, { useState, useEffect} from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = (props) => {

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [text, setText] = useState('');

  useEffect(() => {

    if (props.set !== undefined) {
      props.set(rating);
    }
    console.log('rating: ', rating);
    if (rating === 1) { setText('Poor')}
    if (rating === 2) { setText('Fair')}
    if (rating === 3) { setText('Average')}
    if (rating === 4) { setText('Good!')}
    if (rating === 5) { setText('Great!!')}

  },[rating]);

return (
  <div style={{display: 'flex'}}>
    {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
      return <label style={{display: 'inline-block', height: '35px'}}>

        <FaStar size={props.size}
        color={ratingValue <= (hover || rating) ? '#fff' : '#000000'}
        onMouseEnter={() => setHover(ratingValue)}
        onMouseLeave={() => setHover(null)}/>
        <input type='radio'
          className="input-hidden"
          name={props.name}
          required
          value={ratingValue}
          onClick={() => setRating(ratingValue)}
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}/>
        </label>
    })}
    <span style={{fontSize: '18px', paddingTop: '5px', paddingLeft: '10px'}}>{text}</span>
  </div>
)
}


export default StarRating;