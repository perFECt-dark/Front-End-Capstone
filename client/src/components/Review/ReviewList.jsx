import React, { useState, useEffect } from 'react';
import ReviewImage from './ReviewImage.jsx';
import StarDisplay from '../StarDisplay';
import axios from 'axios';


const ReviewList = (props) => {

  const [toggle, setToggle] = useState('none');
  const [read, setRead] = useState(false);
  const [readText, setReadText] = useState('read more')

  useEffect(() => {

    if (read) {
      setReadText('read less');
    } else {
      setReadText('read more');
    }

  }, [read]);

  const submitHelp = (isHelp) => {

    var subType = isHelp ? 'helpful' : 'report';
    var highlight = isHelp ? 'yes' : 'no';

    if (toggle === 'none') {

      var newUrl = `http://ec2-52-41-185-16.us-west-2.compute.amazonaws.com:3000/reviewId/${props.id}/${subType}`;

      axios.put(newUrl)
      .then((res) => {

        console.log('success');


      })
      .catch((err) => {
        console.log(err);
        console.log('unable to post Help Review');
      });

      setToggle(highlight);
    }
  }

  const addCount = () => {
    return toggle === 'yes' ? 1 : 0;
  }

  const yesStyle = {

    fontSize: '14px',
    cursor: 'pointer',
    color: toggle === 'yes' ? '#bb9d7b' : '#888'
  }

  const noStyle = {

    fontSize: '14px',
    cursor: 'pointer',
    color: toggle === 'no' ? '#bb9d7b' : '#888'
  }



  return (

    <li style={{borderTop: '1px solid grey', paddingTop: '10px', marginTop: '5px'}}>


        <div className="col-1-5" style={{overflow: 'hidden'}}>

          <div style={{paddingBottom: '5px'}}><h3 style={{paddingTop: '10px'}}>{props.reviewItem.reviewer_name}</h3></div>
          {props.reviewItem.recommend && <p style={{fontSize: '16px', color: '#bb9d7b'}}>✓ I recommend this product</p>}
          <div style={{paddingTop: '8px', paddingBottom: '5px'}}><p style={{fontSize: '12px'}}>{props.reviewItem.date}</p></div>

        </div><aside className="col-1-3" style={{overflow: 'hidden'}}>

          <StarDisplay size={15} val={props.reviewItem.rating}/>
          <div style={{padding: '5px 0px 5px 5px'}}><h3>{props.reviewItem.summary}</h3></div>
          {!read && props.reviewItem.body.length > 70 && <p>{props.reviewItem.body.slice(0, 70) + '...'}</p>}
          {!read && props.reviewItem.body.length <= 70 && <p>{props.reviewItem.body.slice(0, 70)}</p>}
          {read && <p>{props.reviewItem.body}</p>}
          {props.reviewItem.body.length > 70 && <span style={{fontStyle: 'italic', fontSize: '18px', color: '#bb9d7b', cursor: 'pointer'}}
          onClick={() => setRead(!read)}>{readText}</span>}


        </aside><aside className="col-1-3">

          {props.reviewItem.photos.length !== 0 && props.reviewItem.photos.map(photoObj =>
            <ReviewImage photo={photoObj} key={photoObj.id} />
            )}

        </aside><aside className="col-1-10" style={{padding: '0px', textAlign: 'center'}}>

          <div style={{paddingBottom: '5px'}}><p>Helpful?</p></div>
          <p><span onClick={() => submitHelp(true)} style={yesStyle}>Yes&#40;{props.reviewItem.helpfulness + addCount()}&#41; </span><span> | </span><span onClick={() => submitHelp(false)} style={noStyle}> Report</span></p>
        </aside>

    </li>

  )

};


export default ReviewList;