import React, {useState, useEffect} from 'react';
import ReviewImage from './ReviewImage.jsx';


const ReviewList = (props) => {

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
    paddingRight: '5px'
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

    <li style={{borderTop: '1px solid grey'}}>
      <div style={gridSyle}>

        <div style={colUser}>

          <h1 style={{paddingTop: '10px'}}>Username</h1><br></br>
          <p>Poseted on 1/16/2022</p>

        </div><aside style={colReview}>

          <h1>⭐⭐⭐</h1>
          <h1>Here is the title of the review</h1>
          <p>Here is the inner info of the review. I thought the product was alrught. Was feeling it, but the price was
            not cool.
          </p>


        </aside><aside style={colImage}>

          <ReviewImage />
          <ReviewImage />
          <ReviewImage />
          <ReviewImage />
        </aside><aside style={colHelp}>

          <p>👍 Helpful &#40;3&#41;</p>
        </aside>

      </div>
    </li>

  )

}


export default ReviewList;