import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarDisplay = (props) => {

  var starAmount = props.stars || 5;

  const convert = (num) => {

    if (num % 1 === 0) {
      return 'Even Number';
    }
    var x = ~~num;
    x++;

    return x;
  }

  const findHalf = (num) => {

    var dec = num % 1;
    if (dec >= .75) {
      return 'url(#grad75)';
    } else if (dec >= .5) {
      return 'url(#grad50)';
    } else if (dec >= .25) {
      return 'url(#grad25)';
    } else {
      return 'url(#grad0)';
    }
  }

  const roundedVal = convert(props.val);
  const percent = findHalf(props.val);
  //console.log('Here is roundedValue', roundedVal);

  return (
    <div>
      <svg className="linear-gradient-template">
        <linearGradient id="grad0" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#fff' }}></stop>
          <stop offset="0%" style={{ stopColor: '#252525' }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="grad25" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="25%" style={{ stopColor: '#fff' }}></stop>
          <stop offset="25%" style={{ stopColor: '#252525' }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="grad50" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="50%" style={{ stopColor: '#fff' }}></stop>
          <stop offset="50%" style={{ stopColor: '#252525' }}></stop>
        </linearGradient>
      </svg>
      <svg className="linear-gradient-template">
        <linearGradient id="grad75" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="75%" style={{ stopColor: '#fff' }}></stop>
          <stop offset="75%" style={{ stopColor: '#252525' }}></stop>
        </linearGradient>
      </svg>

      {[...Array(starAmount)].map((star, i) => {
        const ratingValue = i + 1;
        return <label>
          <input type='radio'
            style={{ display: 'none' }}
            name='rating'
            value={ratingValue}
          />
          <FaStar size={props.size}
            color={ratingValue <= props.val ? '#fff' : '#252525'}
            fill={ratingValue === roundedVal ? percent : 'currentColor'}
            stroke="#fff"
            strokeWidth="30" />
        </label>
      })}
    </div>
  )
}


export default StarDisplay;
