import React, { useState, useEffect } from 'react';
import ReviewImage from './ReviewImage.jsx';
import StarDisplay from '../StarDisplay';


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

  const yesStyle = {

    fontSize: '12px',
    cursor: 'pointer',
    color: toggle === 'yes' ? '#bb9d7b' : '#888'
  }

  const noStyle = {

    fontSize: '12px',
    cursor: 'pointer',
    color: toggle === 'no' ? '#bb9d7b' : '#888'
  }



  return (

    <li style={{borderTop: '1px solid grey', paddingTop: '10px'}}>


        <div className="col-1-5" style={{overflow: 'hidden'}}>

          <h3 style={{paddingTop: '10px'}}>{props.reviewItem.reviewer_name}</h3>
          {props.reviewItem.recommend && <p style={{fontSize: '16px', color: '#bb9d7b'}}>✓ I recommend this product</p>}
          <p style={{fontSize: '12px'}}>{props.reviewItem.date}</p>

        </div><aside className="col-1-3" style={{overflow: 'hidden'}}>

          <StarDisplay size={15} val={props.reviewItem.rating}/>
          <h3>{props.reviewItem.summary}</h3>
          {!read && props.reviewItem.body.length > 70 && <p>{props.reviewItem.body.slice(0, 70) + '...'}</p>}
          {!read && props.reviewItem.body.length <= 70 && <p>{props.reviewItem.body.slice(0, 70)}</p>}
          {read && <p>{props.reviewItem.body}</p>}
          {props.reviewItem.body.length > 70 && <span style={{fontStyle: 'italic', fontSize: '18px', color: '#bb9d7b', cursor: 'pointer'}}
          onClick={() => setRead(!read)}>{readText}</span>}


        </aside><aside className="col-1-3">

          {props.reviewItem.photos.length !== 0 && props.reviewItem.photos.map(photoObj =>
            <ReviewImage photo={photoObj} key={photoObj.id} />
            )}

        </aside><aside className="col-1-10">

          <p>👍 Helpful?</p>
          <p><span onClick={() => setToggle('yes')} style={yesStyle}>Yes&#40;{props.reviewItem.helpfulness}&#41; </span><span onClick={() => setToggle('no')} style={noStyle}>No&#40;#&#41;</span></p>
        </aside>

    </li>

  )

};


export default ReviewList;