import React, { useState, useEffect } from 'react';
import ReviewList from './ReviewList';
import axios from 'axios';
import StarDisplay from '../StarDisplay';
import ReviewModal from './ReviewModal';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

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
  console.log(reviews.results);


  useEffect(() => {

    if (reviews.results.length >= 6) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  }, [reviews]);

  useEffect(() => {

    setReviews(props.reviewData);
  }, [props]);


  const getTotalReviews = () => {

    var total = 0;

    if (meta.ratings['1'] !== undefined) {total += Number(meta.ratings['1'])}
    if (meta.ratings['2'] !== undefined) {total += Number(meta.ratings['2'])}
    if (meta.ratings['3'] !== undefined) {total += Number(meta.ratings['3'])}
    if (meta.ratings['4'] !== undefined) {total += Number(meta.ratings['4'])}
    if (meta.ratings['5'] !== undefined) {total += Number(meta.ratings['5'])}

    return total;
  }

  const totalReviews = getTotalReviews();

  const findAverageRating = (ratings) => {

    var total = 0;
    if (ratings['1'] !== undefined) {total += (Number(ratings['1']) * 1)}
    if (ratings['2'] !== undefined) {total += (Number(ratings['2']) * 2)}
    if (ratings['3'] !== undefined) {total += (Number(ratings['3']) * 3)}
    if (ratings['4'] !== undefined) {total += (Number(ratings['4']) * 4)}
    if (ratings['5'] !== undefined) {total += (Number(ratings['5']) * 5)}

    total = total / totalReviews;
    total = Math.round(total * 10) / 10;

    // console.log('total ratings: ', totalRatings);
    // console.log('total ',total);

    return total;
  }

  const averageRating = findAverageRating(meta.ratings);
  //useEffect(() => {}, [meta]);

  const filterReviews = (type) => {
    //console.log('Here it isssss: ', type);
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

    console.log('This is item id we are searching for: ', reviews.product);
    var newCount = reviews.count + increment;
    //console.log('Here is the sort: ', sort);
    //console.log('Here is the count: ', newCount);
    var newUrl = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/item/${reviews.product}/reviews/${newCount}/${sort}`;

    axios.get(newUrl)
    .then((reviewData) => {

      //console.log('This should not trigger');
      setReviews(reviewData.data);

    })
    .catch((err) => {
      console.log(err);
      console.log('unable to grab data');
    });
  }


  // Styles go here //
  const listOne = {
    backgroundColor: hoverOne ? '#383838' : '#252525',
    padding: '10px'
  }

  const listTwo = {
    backgroundColor: hoverTwo ? '#383838' : '#252525',
    padding: '10px'
  }

  const listScroll = {
    paddingTop: '10px',
    height: scroll ? '500px' : 'auto',
    overflowY: scroll ? 'auto' : 'visible'

  }

  return (
  <section className="row">

    <div className="grid" >

        <h2>Ratings and Reviews &#40;{totalReviews}&#41;</h2>

        <section className="ratingBox">

          <div className="col-1-5" style={{paddingTop: '12px'}}>

              <div style={{paddingLeft: '30px'}}><h2>Average Rating</h2></div>
              <div className="col-2-3" style={{paddingRight: '0px', textAlign: 'center'}}>
                <StarDisplay size={20} val={averageRating}/>
              </div><aside className="col-1-3" style={{paddingLeft: '0px', paddingBottom:'15px'}}>
                <span style={{fontSize: '20px'}}>{averageRating}</span>
              </aside>

          </div><aside className="col-1-3" style={{paddingTop: '5px', paddingLeft: '30px'}}>

              {meta.ratings['1'] !== undefined && <div><div className="col-1-5" >
                <div style={{display: 'inline-block'}}><h5>1 </h5></div>
                <div style={{display: 'inline-block', padding: '5px 0px 0px 5px'}}><StarDisplay size={13} val={1} stars={1}/></div>
                </div><aside className="col-80" style={{paddingTop: '7px'}}>

                <div style={{width: '60%', height: '10px', border: '1px solid #fff'}}>
                  <div style={{width: `${(Number(meta.ratings['1'])/totalReviews*100) + '%'}`, height: '9px', backgroundColor: '#fff'}}></div>
                </div>
              </aside></div>}

              {meta.ratings['2'] !== undefined && <div><div className="col-1-5" >
                <div style={{display: 'inline-block'}}><h5>2 </h5></div>
                <div style={{display: 'inline-block', padding: '5px 0px 0px 5px'}}><StarDisplay size={13} val={1} stars={1}/></div>
                </div><aside className="col-80" style={{paddingTop: '7px'}}>

                <div style={{width: '60%', height: '10px', border: '1px solid #fff'}}>
                  <div style={{width: `${(Number(meta.ratings['2'])/totalReviews*100) + '%'}`, height: '9px', backgroundColor: '#fff'}}></div>
                </div>
              </aside></div>}

              {meta.ratings['3'] !== undefined && <div><div className="col-1-5" >
                <div style={{display: 'inline-block'}}><h5>3 </h5></div>
                <div style={{display: 'inline-block', padding: '5px 0px 0px 5px'}}><StarDisplay size={13} val={1} stars={1}/></div>
                </div><aside className="col-80" style={{paddingTop: '7px'}}>

                <div style={{width: '60%', height: '10px', border: '1px solid #fff'}}>
                  <div style={{width: `${(Number(meta.ratings['3'])/totalReviews*100) + '%'}`, height: '9px', backgroundColor: '#fff'}}></div>
                </div>
              </aside></div>}


              {meta.ratings['4'] !== undefined && <div><div className="col-1-5" >
                <div style={{display: 'inline-block'}}><h5>4 </h5></div>
                <div style={{display: 'inline-block', padding: '5px 0px 0px 5px'}}><StarDisplay size={13} val={1} stars={1}/></div>
                </div><aside className="col-80" style={{paddingTop: '7px'}}>

                <div style={{width: '60%', height: '10px', border: '1px solid #fff'}}>
                  <div style={{width: `${(Number(meta.ratings['4'])/totalReviews*100) + '%'}`, height: '9px', backgroundColor: '#fff'}}></div>
                </div>
              </aside></div>}


              {meta.ratings['5'] !== undefined && <div><div className="col-1-5" >
                <div style={{display: 'inline-block'}}><h5>5 </h5></div>
                <div style={{display: 'inline-block', padding: '5px 0px 0px 5px'}}><StarDisplay size={13} val={1} stars={1}/></div>
                </div><aside className="col-80" style={{paddingTop: '7px'}}>

                <div style={{width: '60%', height: '10px', border: '1px solid #fff'}}>
                  <div style={{width: `${(Number(meta.ratings['5'])/totalReviews*100) + '%'}`, height: '9px', backgroundColor: '#fff'}}></div>
                </div>
              </aside></div>}

              {/* meta.characteristics[characteristics[0]].value */}


            </aside><aside className="col-45" style={{paddingTop: '4px'}}>

              <div className="col-1-3" style={{paddingTop: '10px'}}>

                {characteristics.length > 0 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[0]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[0]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

                  {characteristics.length > 3 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[3]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[3]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

              </div><aside className="col-1-3" style={{paddingTop: '10px'}}>

              {characteristics.length > 1 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[1]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[1]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

                  {characteristics.length > 4 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[4]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[4]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

              </aside><aside className="col-1-3" style={{paddingTop: '10px'}}>

              {characteristics.length > 2 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[2]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[2]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

                  {characteristics.length > 5 &&
                <div style={{paddingBottom: '10px'}}><h4>{characteristics[5]}</h4><div style={{width: '100%', height: '10px', border: '1px solid #fff', marginTop: '10px'}}>
                <div style={{width: `${(meta.characteristics[characteristics[5]].value/5*100) + '%'}`, height: '9px', borderRight: '2px solid #fff'}}>
                  </div></div></div>}

              </aside>

                </aside>

        </section>
        <section style={{paddingBottom: '10px'}}>

          <div className="col-2-3"></div><aside className="col-1-3"  style={{textAlign: 'right', padding: '0px'}}>

            <div className="col-1-3"></div><aside className="col-1-3"  style={{textAlign: 'right', paddingTop: '5px'}}>

            <h4>Sort By</h4>

            </aside><aside className="col-1-3" style={{textAlign: 'left', padding: '0px', paddingLeft: '5px'}}>

              <div className="dropdown" style={{textAlign: 'left'}}>
                <span className="bttn-alt">{sortList[0]}</span>
                <div className="dropdown-content" style={{cursor: 'pointer'}}>
                  <div style={listOne} onClick={() => filterReviews(sortList[1])}
                   onMouseEnter={() => setHoverOne(true)}
                   onMouseLeave={() => setHoverOne(false)}>
                    <p>{sortList[1]}</p></div>
                  <div style={listTwo} onClick={() => filterReviews(sortList[2])}
                  onMouseEnter={() => setHoverTwo(true)}
                  onMouseLeave={() => setHoverTwo(false)}>
                    <p>{sortList[2]}</p></div>
                </div>
              </div>

            </aside>

          </aside>

        </section>
        <section>
          <SimpleBar style={{maxHeight: 500}}>
          <ul>
            {reviews.results.length !== 0 && reviews.results.map(review =>
                  <ReviewList reviewItem={review} key={review.review_id} id={review.review_id}/>
              )}

          </ul>
          </SimpleBar>
        </section>
        <section style={{borderTop: '1px solid grey', paddingTop: '10px'}}>

          <div className="col-2-3">

            <div className="bttn" onClick={() => setDisplayForm(true)}>Add a Review</div>


          </div><aside className="col-1-3" style={{textAlign: 'right'}}>

          <div className="bttn" onClick={() => moreReviews(sortList[0].toLowerCase())}>More Reviews</div>

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
