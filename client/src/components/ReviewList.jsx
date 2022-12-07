import React from 'react';
import ReviewImage from './ReviewImage';

function ReviewList(props) {
  function findStars() {
    if (props.reviewItem.rating === 1) {
      return '⭐';
    }
    if (props.reviewItem.rating === 2) {
      return '⭐⭐';
    }
    if (props.reviewItem.rating === 3) {
      return '⭐⭐⭐';
    }
    if (props.reviewItem.rating === 4) {
      return '⭐⭐⭐⭐';
    }
    if (props.reviewItem.rating === 5) {
      return '⭐⭐⭐⭐⭐';
    }
  }

  const stars = findStars();
  const rowStyle = {
    minWidth: '960px',
    background: '#fff',
    padding: '36px 0 14px 0',
  };

  const gridSyle = {
    paddingLeft: '15px',
    paddingRight: '15px',
    margin: '0 auto',
    width: '1200px',
  };

  const colReview = {
    width: '35%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    overflow: 'hidden',
  };

  const colUser = {
    width: '15%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
  };

  const colImage = {
    width: '35%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '30px',
  };

  const colHelp = {
    width: '10%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '40px',
  };

  return (
    <li style={{ borderTop: '1px solid grey' }}>
      <div style={gridSyle}>
        <div style={colUser}>
          <h1 style={{ paddingTop: '10px' }}>
            {props.reviewItem.reviewer_name}
          </h1>
          <br></br>
          <p>{props.reviewItem.date}</p>
        </div>
        <aside style={colReview}>
          <h1>{stars}</h1>
          <h1>{props.reviewItem.summary}</h1>
          <p>{props.reviewItem.body}</p>
        </aside>
        <aside style={colImage}>
          {props.reviewItem.photos.length !== 0 &&
            props.reviewItem.photos.map((photoObj) => (
              <ReviewImage photo={photoObj} key={photoObj.id} />
            ))}
        </aside>
        <aside style={colHelp}>
          <p>👍 Helpful &#40;3&#41;</p>
        </aside>
      </div>
    </li>
  );
}

export default ReviewList;
