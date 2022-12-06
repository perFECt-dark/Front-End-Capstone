import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import axios from 'axios';

function Reviews(props) {

  function getStars(rating) {
    if (rating < 2) {
      return '⭐';
    }
    if (rating < 3) {
      return '⭐⭐';
    }
    if (rating < 4) {
      return '⭐⭐⭐';
    }
    if (rating < 5) {
      return '⭐⭐⭐⭐';
    }
    return '⭐⭐⭐⭐⭐';
  }


  const [reviews, setReviews] = useState(props.reviewData);
  const [meta, setMeta] = useState(props.metaData);
  const [stars, setStars] = useState({sizeStar: 'null',
    comfortStar: 'null',
    qualityStar: 'null',
  });


  //useEffect(() => {}, [meta]);

  const moreReviews = () => {

    var newCount = reviews.count += 2;
    console.log('New list: ', newCount);
    console.log(reviews.product);
    const newUrl = `http://localhost:3000/item/${reviews.product}/reviews/${newCount}`;

    axios.get(newUrl)
    .then((reviewData) => {

      console.log('This should not trigger');
      setReviews(reviewData.data);

    })
    .catch((err) => {
      console.log(err);
      console.log('unable to grab data');
    });
  }

  // Styles go here //

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
        <section style={{borderTop: '1px solid grey', paddingTop: '10px'}}>

          <div className="col-2-3">

            <div className="btn">Add a Review</div>


          </div><aside className="col-1-3" style={{textAlign: 'right'}}>

          <div className="btn" onClick={moreReviews}>More Reviews</div>

          </aside>
        </section>
      </div>
    </section>
  );
}

export default Reviews;
