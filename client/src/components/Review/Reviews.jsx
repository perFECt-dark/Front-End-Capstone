import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import axios from 'axios';
import StarDisplay from '../StarDisplay';
import ReviewModal from './ReviewModal';

function Reviews(props) {



  const [sortList, setSortList] = useState(['Relevant', 'Helpful', 'Newest']);
  const[hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [reviews, setReviews] = useState(props.reviewData);
  const [displayForm, setDisplayForm] = useState(false);
  const meta = props.metaData;
  const productTitle = props.title;



  const findAverageRating = (ratings) => {

    var totalRatings = Number(ratings['1']) +
    Number(ratings['2']) + Number(ratings['3']) + Number(ratings['4']) +
    Number(ratings['5']);
    var total = (Number(ratings['1']) * 1) +
    (Number(ratings['2']) * 2) +
    (Number(ratings['3']) * 3) +
    (Number(ratings['4']) * 4) +
    (Number(ratings['5']) * 5);

    total = total / totalRatings;
    total = Math.round(total * 10) / 10;

    console.log('total ratings: ', totalRatings);
    console.log('total ',total);

    return total;
  }

  const averageRating = findAverageRating(meta.ratings);
  //useEffect(() => {}, [meta]);

  const filterReviews = (type) => {
    console.log('Here it isssss: ', type);
    if (type === 'Relevant') {
      setSortList(['Relevant', 'Helpful', 'Newest']);
      moreReviews('relevant', 0);
    } else if (type === 'Helpful') {
      setSortList(['Helpful', 'Relevant', 'Newest']);
      moreReviews('helpful', 0);
    } else {
      setSortList(['Newest', 'Helpful', 'Relevant']);
      moreReviews('newest', 0);
    }
  }

  const moreReviews = (sort, increment = 2) => {

    var newCount = reviews.count + increment;
    console.log('Here is the sort: ', sort);
    console.log('Here is the count: ', newCount);
    const newUrl = `http://localhost:3000/item/${reviews.product}/reviews/${newCount}/${sort}`;

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
  const listOne = {
    backgroundColor: hoverOne ? '#ebebeb' : 'white'
  }

  const listTwo = {
    backgroundColor: hoverTwo ? '#ebebeb' : 'white'
  }

  return (
  <section className="row">

    <div className="grid" >

        <h2>Ratings and Reviews</h2>

        <section className="giveGrey" style={{backgroundColor: 'grey'}}>

          <div className="col-1-3" style={{paddingTop: '10px'}}>

              <h2>Average Rating</h2>
              <div><StarDisplay size={20} val={3.67}/></div><aside><h2>{averageRating}<span> Stars</span></h2></aside>

          </div><aside className="col-1-3">



            </aside><aside className="col-1-3" style={{paddingTop: '5px'}}>

                    <h4>Size  <StarDisplay size={15} val={meta.characteristics.Fit.value}/></h4>
                    <h4>Comfort  <StarDisplay size={15} val={meta.characteristics.Comfort.value}/></h4>
                    <h4>Quality  <StarDisplay size={15} val={meta.characteristics.Quality.value}/></h4>

                </aside>

        </section>
        <section style={{paddingTop: '10px'}}>

          <div className="col-2-3"></div><aside className="col-1-3"  style={{textAlign: 'right', padding: '0px'}}>

            <div className="col-1-3"></div><aside className="col-1-3"  style={{textAlign: 'right', padding: '0px'}}>

            <h4>Sort By</h4>

            </aside><aside className="col-1-3" style={{textAlign: 'left', padding: '0px', paddingLeft: '5px'}}>

              <div className="dropdown" style={{textAlign: 'left'}}>
                <span className="btn">{sortList[0]}</span>
                <div class="dropdown-content" style={{cursor: 'pointer'}}>
                  <p onClick={() => filterReviews(sortList[1])}
                   onMouseEnter={() => setHoverOne(true)}
                   onMouseLeave={() => setHoverOne(false)}
                   style={listOne}>{sortList[1]}</p>
                  <p onClick={() => filterReviews(sortList[2])}
                  onMouseEnter={() => setHoverTwo(true)}
                  onMouseLeave={() => setHoverTwo(false)}
                  style={listTwo}>{sortList[2]}</p>
                </div>
              </div>

            </aside>

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

            <div className="btn" onClick={() => setDisplayForm(true)}>Add a Review</div>


          </div><aside className="col-1-3" style={{textAlign: 'right'}}>

          <div className="btn" onClick={() => moreReviews(sortList[0].toLowerCase())}>More Reviews</div>

          </aside>
        </section>
        <section>
        {displayForm && <ReviewModal title={productTitle} close={setDisplayForm}/>}
        </section>
      </div>
    </section>
  );
}

export default Reviews;
