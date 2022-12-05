import React, { useState } from 'react';
import ReviewImage from './ReviewImage.jsx';


const ReviewList = (props) => {

  const [toggle, setToggle] = useState('none');


  const findStars = () => {

    if (props.reviewItem.rating === 1) {return '⭐'}
    if (props.reviewItem.rating === 2) {return '⭐⭐'}
    if (props.reviewItem.rating === 3) {return '⭐⭐⭐'}
    if (props.reviewItem.rating === 4) {return '⭐⭐⭐⭐'}
    if (props.reviewItem.rating === 5) {return '⭐⭐⭐⭐⭐'}

  };

  const stars = findStars();

  const yesStyle = {

    fontSize: '12px',
    cursor: 'pointer',
    color: toggle === 'yes' ? 'blue' : '#888'
  }

  const noStyle = {

    fontSize: '12px',
    cursor: 'pointer',
    color: toggle === 'no' ? 'blue' : '#888'
  }



  return (

    <li style={{borderTop: '1px solid grey', paddingTop: '10px'}}>


        <div className="col-1-5">

          <h3 style={{paddingTop: '10px'}}>{props.reviewItem.reviewer_name}</h3>
          {props.reviewItem.recommend && <p style={{fontSize: '12px', color: 'green'}}>✓ I recommend this product</p>}
          <p style={{fontSize: '12px'}}>{props.reviewItem.date}</p>

        </div><aside className="col-1-3" style={{overflow: 'hidden'}}>

          <h3>{stars}</h3>
          <h3>{props.reviewItem.summary}</h3>
          <p>{props.reviewItem.body}</p>


        </aside><aside className="col-1-3">

          {props.reviewItem.photos.length !== 0 && props.reviewItem.photos.map(photoObj =>
            <ReviewImage photo={photoObj} key={photoObj.id} />
            )}

        </aside><aside className="col-1-10">

          <p>👍 Helpful?</p>
          <p><span onClick={() => setToggle('yes')} style={yesStyle}>Yes&#40;{props.reviewItem.helpfulness}&#41; </span><span onClick={() => setToggle('no')} style={noStyle}>No&#40;23&#41;</span></p>
        </aside>

    </li>

  )

};


export default ReviewList;