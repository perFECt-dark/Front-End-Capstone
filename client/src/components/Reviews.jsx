import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';


const Reviews = (props) => {


  const getStars = (rating) => {

    if (rating < 2) {return '⭐'}
    else if (rating < 3) {return '⭐⭐'}
    else if (rating < 4) {return '⭐⭐⭐'}
    else if (rating < 5) {return '⭐⭐⭐⭐'}
    else {return '⭐⭐⭐⭐⭐'}

  }


  const [reviews, setReviews] = useState(props.reviewData);
  const [meta, setMeta] = useState(props.metaData);
  const [stars, setStars] = useState({sizeStar: 'null',
    comfortStar: 'null',
    qualityStar: 'null'});


  useEffect(() => {

  },[meta]);


  //// Styles go here ////

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

  const col23 = {

    width: '50%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '15px',
    paddingRight: '15px'
  }

  const col13 = {

    width: '30%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '15px',
    paddingRight: '15px'
  }

  const pageNum = {

    width: '45%',
    display: 'inline-block',
    verticalAlign: 'top',
    paddingLeft: '15px',
    paddingRight: '15px',
    textAlign: 'right'
  }

  const addReview = {

    borderRadius: '5px',
    color: 'black',
    cursor: 'pointer',
    display: 'inline-block',
    fontWeight: 'bold',
    letterSpacing: '.5px',
    textTransform: 'uppercase'
  }



  return (
  <section className="row">

    <div className="grid" >

        <h2>Ratings and Reviews</h2>

        <section className="giveGrey" style={{backgroundColor: 'grey'}}>

          <div className="col-1-3" style={{paddingTop: '20px'}}>

              <h2>Average Rating</h2>
              <h2>⭐⭐⭐ 3.5 Stars</h2>

          </div><aside className="col-1-3">



            </aside><aside className="col-1-3" style={{paddingTop: '20px'}}>

                    <h4>Size  <span>{stars.sizeStar}</span></h4>
                    <h4>Comfort  <span>{stars.comfortStar}</span></h4>
                    <h4>Quality  <span>{stars.qualityStar}</span></h4>

                </aside>

        </section>
        <section style={{paddingTop: '10px'}}>
          <ul>
            {reviews.results.length !== 0 && reviews.results.map(review =>
                  <ReviewList reviewItem={review} key={review.review_id}/>
              )}

          </ul>
        </section>
        <section style={{borderTop: '1px solid grey'}}>

          <div className="col-1-3">

            <p style={addReview}>Add a Review</p>


          </div><aside className="col-1-3">

            <p>&#60; <span style={{fontWeight: 'bold'}}>1</span> 2 3 4 5 6 7 8 &#62;</p>

          </aside>

        </section>
    </div>

  </section>
  );
};




export default Reviews;