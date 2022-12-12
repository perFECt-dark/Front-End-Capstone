import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import axios from 'axios';
import StarDisplay from '../StarDisplay';
import ReviewModal from './ReviewModal';

function Reviews(props) {



  const [sortList, setSortList] = useState(['Relevant', 'Helpful', 'Newest']);
  const [hoverOne, setHoverOne] = useState(false);
  const [hoverTwo, setHoverTwo] = useState(false);
  const [reviews, setReviews] = useState(props.reviewData);
  const [displayForm, setDisplayForm] = useState(false);
  const meta = props.metaData;
  const productTitle = props.title;
  const characteristics = Object.keys(meta.characteristics);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {

    if (reviews.results.length >= 6) {
      setScroll(true);
    }
  }, [reviews])


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

    // console.log('total ratings: ', totalRatings);
    // console.log('total ',total);

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

  const sendReview = () => {

    var sauce = {
      product_id: 40350,
      rating: 3,
      summary: 'Great product with a perfect fit!',
      body: 'This product is so great but I am only giving it 3 stars because it makes me look fat.',
      recommend: true,
      name: 'BrosBeforeTrolls123',
      email: 'ilovebros123@gmail.com',
      photos: ['https://i.ibb.co/Y7bBBSx/bros1.jpg', 'https://i.ibb.co/r4Zz5J3/bros2.jpg', 'https://i.ibb.co/BCkqKLN/coolguy.png'],
      characteristics: {
        '135242': 5,
        '135243': 4,
        '135240': 3,
        '135241': 5
      }
    }
    console.log(sauce);

    //console.log(JSON.stringify(sauce));

    let options = {

      headers: {
        Authorization: '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'
      }
    };

    axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/', sauce, options)
    .then((response) => {

      console.log('yay!',response.data);
    })
    .catch((err) => {

      console.log('we got an error!', err);
    });
  }

  // Styles go here //
  const listOne = {
    backgroundColor: hoverOne ? '#ebebeb' : 'white'
  }

  const listTwo = {
    backgroundColor: hoverTwo ? '#ebebeb' : 'white'
  }

  const listScroll = {
    paddingTop: '10px',
    height: scroll ? '500px' : 'auto',
    overflowY: scroll ? 'auto' : 'visible'

  }

  return (
  <section className="row">

    <div className="grid" >

        <h2>Ratings and Reviews</h2>

        <section className="ratingBox">

          <div className="col-1-2" style={{paddingTop: '12px'}}>

              <div style={{paddingLeft: '30px'}}><h2>Average Rating</h2></div>
              <div className="col-1-3" style={{paddingRight: '0px', textAlign: 'center'}}>
                <StarDisplay size={20} val={averageRating}/>
              </div><aside className="col-1-3" style={{paddingLeft: '0px', paddingBottom:'15px'}}>
                <span style={{fontSize: '20px'}}>{averageRating} Stars</span>
              </aside>

          </div><aside className="col-1-2" style={{paddingTop: '8px'}}>

              <div className="col-1-3">

                {characteristics.length > 0 &&
                <h4>{characteristics[0]}  <StarDisplay size={15} val={meta.characteristics[characteristics[0]].value}/></h4>}

                {characteristics.length > 3 &&
                <h4>{characteristics[3]}  <StarDisplay size={15} val={meta.characteristics[characteristics[3]].value}/></h4>}

              </div><aside className="col-1-3">

                {characteristics.length > 1 &&
                <h4>{characteristics[1]}  <StarDisplay size={15} val={meta.characteristics[characteristics[1]].value}/></h4>}

                {characteristics.length > 4 &&
                <h4>{characteristics[4]}  <StarDisplay size={15} val={meta.characteristics[characteristics[4]].value}/></h4>}

              </aside><aside className="col-1-3">

                {characteristics.length > 2 &&
                <h4>{characteristics[2]}  <StarDisplay size={15} val={meta.characteristics[characteristics[2]].value}/></h4>}

                {characteristics.length > 5 &&
                <h4>{characteristics[5]}  <StarDisplay size={15} val={meta.characteristics[characteristics[5]].value}/></h4>}

              </aside>

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
        <section style={listScroll}>
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
        {displayForm && <ReviewModal
        title={productTitle}
        close={setDisplayForm}
        chars={characteristics}
        charsID={meta.characteristics}
        pId={Number(meta.product_id)}/>}
        </section>
      </div>
    </section>
  );
}

export default Reviews;
