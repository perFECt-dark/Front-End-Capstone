import React from 'react';
import ReviewImage from './ReviewImage.jsx';


const ReviewList = (props) => {


  const findStars = () => {

    if (props.reviewItem.rating === 1) {return '⭐'}
    if (props.reviewItem.rating === 2) {return '⭐⭐'}
    if (props.reviewItem.rating === 3) {return '⭐⭐⭐'}
    if (props.reviewItem.rating === 4) {return '⭐⭐⭐⭐'}
    if (props.reviewItem.rating === 5) {return '⭐⭐⭐⭐⭐'}

  };

  const stars = findStars();

  const rowStyle = {

    minWidth: '960px',
    background: '#fff',
    padding: '36px 0 14px 0'
  }

  const gridSyle = {
    paddingLeft: '15px',
    paddingRight: '15px',
    margin: '0 auto',
    width: '1200px'
  }

  const colReview = {

    width: '35%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    overflow: 'hidden'
  }

  const colUser = {

    width: '15%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px'

  }

  const colImage = {

    width: '35%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '30px'
  }

  const colHelp = {


    width: '10%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '40px'
  }


  return (

    <li style={{borderTop: '1px solid grey', paddingTop: '10px'}}>


        <div className="col-1-5">

          <h3 style={{paddingTop: '10px'}}>{props.reviewItem.reviewer_name}</h3><br></br>
          <p>{props.reviewItem.date}</p>

        </div><aside className="col-1-3" style={{overflow: 'hidden'}}>

          <h3>{stars}</h3>
          <h3>{props.reviewItem.summary}</h3>
          <p>{props.reviewItem.body}</p>


        </aside><aside className="col-1-3">

          {props.reviewItem.photos.length !== 0 && props.reviewItem.photos.map(photoObj =>
            <ReviewImage photo={photoObj} key={photoObj.id} />
            )}

        </aside><aside className="col-1-10">

          <p>👍 Helpful &#40;3&#41;</p>
        </aside>

    </li>

  )

};


export default ReviewList;