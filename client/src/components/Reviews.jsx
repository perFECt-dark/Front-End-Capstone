import React, {useState, useEffect} from 'react';
import ReviewList from './ReviewList.jsx';


const Reviews = (props) => {






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
  <section className="row" style={rowStyle}>

    <div className="grid giveBorder" style={gridSyle}>

        <h2>Ratings and Reviews</h2>

        <section className="giveGrey" style={{backgroundColor: 'grey'}}>

          <div className="col-1-3 verticalText" style={col23}>

              <h1>Average Rating</h1>
              <h1>⭐⭐⭐ 3.5 Stars</h1>

          </div><aside className="col-1-3 verticalText" style={col13}>

                    <h1>Size  <span>⭐⭐⭐</span></h1>
                    <h1>Comfort  <span>⭐⭐</span></h1>

                </aside>

        </section>
        <section>
          <ul style={{listStyle: 'none', padding:'0px 0px 0px 0px'}}>
              <ReviewList />
              <ReviewList />
              <ReviewList />
              <ReviewList />
          </ul>
        </section>
        <section style={{borderTop: '1px solid grey'}}>

          <div className="col-1-3 verticalText" style={col23}>

            <p style={addReview}>Add a Review</p>


          </div><aside className="col-1-3 verticalText" style={pageNum}>

            <p>&#60; <span style={{fontWeight: 'bold'}}>1</span> 2 3 4 5 6 7 8 &#62;</p>

          </aside>

        </section>
    </div>

  </section>
  );
};




export default Reviews;