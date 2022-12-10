import React, { useState, useEffect }from 'react';
import StarRating from '../StarRating';
import ImageUpload from './ImageUpload';
import ModalRadio from './ModalRadio';
import axios from 'axios';


function ReviewModal(props) {

const [summary, setSummary] = useState('');
const [bodyCount, setBodyCount] = useState('');
const [body, setBody] = useState('');
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [overallRating, setOverallRating] = useState(null);
const [recommend, setRecommend] = useState(null);

const [submitMode, setSubmitMode] = useState(false);
const [submitText, setSubmitText] = useState('Submitting...')
// const [size, setSize] = useState(null);
// const [width, setWidth] = useState(null);
// const [comfort, setComfort] = useState(null);
// const [quality, setQuality] = useState(null);
// const [length, setLength] = useState(null);
// const [fit, setFit] = useState(null);
const [uploads, setUploads] = useState([]);
const [charRatings, setCharRatings] = useState({});

// example urls
// https://i.ibb.co/jvBxzTQ/bgbrain2.png
// https://i.ibb.co/GpB2xL2/bgbrain3.png

const [toggleUpload, setToggleUpload] = useState(true);

useEffect(() => {

  if (uploads.length < 5) {
    setToggleUpload(true);
  } else {
    setToggleUpload(false);
  }

}, [uploads]);

useEffect(() => {

  if (body.length < 50) {
    var num = 50 - body.length;
    setBodyCount(`Minimum required characters left: [${num}]`);
  } else {
    setBodyCount(`Minimum reached`);
  }

}, [body]);

const addUpload = () => {

  var val = document.getElementById('uploadText').value;
  document.getElementById('uploadText').value = '';

  setUploads(current => [...current, val]);
}

 const setChar = (type, rating) => {
  if (type === 'SizeRating') {
    setCharRatings({...charRatings, [props.charsID.Size.id]: rating});
  } else if (type === 'WidthRating') {
    setCharRatings({...charRatings, [props.charsID.Width.id]: rating});
  } else if (type === 'ComfortRating') {
    setCharRatings({...charRatings, [props.charsID.Comfort.id]: rating});
  } else if (type === 'QualityRating') {
    setCharRatings({...charRatings, [props.charsID.Quality.id]: rating});
  } else if (type === 'LengthRating') {
    setCharRatings({...charRatings, [props.charsID.Length.id]: rating});
  } else if (type === 'FitRating') {
    setCharRatings({...charRatings, [props.charsID.Fit.id]: rating});

  }

 }

 const handleSubmit = (e) => {

  e.preventDefault();

  var reviewPost = {
    product_id: props.pId,
    rating: overallRating,
    summary: summary,
    body: body,
    recommend: recommend,
    name: name,
    email: email,
    photos: uploads,
    characteristics: charRatings
  }

  console.log('Here is out post obj: ', reviewPost);
  setSubmitMode(true);

  axios.post('http://localhost:3000/review/submit', reviewPost)
  .then((response) => {

    setSubmitText('✓ Your Review Got Posted');
  })
  .catch((err) => {

    setSubmitText('X Review Did not Post. Error.');
  });

 }

return (

  <div className="ReviewModalBackground" >

    <div className="ReviewModalContainer">

      {!submitMode && <div>
      <div className="titleCloseBtn">
        <button className="closeBtn" onClick={() => props.close(false)}> X </button>
      </div>
      <div className="ReviewModalTitle">
        <h2>Write Your Review</h2>
        <h3>About the {props.title}</h3>
      </div>
      <div className="ReviewModalBody">

        <form onSubmit={handleSubmit}>
          <label className="labelModal">Review Summary</label>
          <input type="text" className="ReviewModalBody-Input"
           value={summary}
           maxlength="60"
           onChange={(e) => setSummary(e.target.value)}
           required
           placeholder="Example: Best purchase ever!"
           />
          <label className="labelModal">Review Body</label>
          <textarea
          required
          maxlength="1000"
          minlength="50"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Why did you like the product or not?">
          </textarea>
          <div style={{textAlign: 'right', marginBottom:'20px'}}><p>{bodyCount}</p></div>
          <label className="labelModal">Display Name</label>
          <input type="text" className="ReviewModalBody-Input"
           required
           value={name}
           onChange={(e) => setName(e.target.value)}
           placeholder="Example: jackson11!"
           maxlength="60"
           />
          <label className="labelModal">Email</label>
          <input type="text" className="ReviewModalBody-Input"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
           required
           placeholder="Example: jackson11@email.com"
           maxlength="60"
           style={{marginBottom: '0'}}
           />
          <div style={{textAlign: 'right', marginBottom:'20px'}}><p>For authentication reasons, you will not be emailed</p></div>
          <label className="labelModal">Overall Rating</label>
          <div style={{textAlign: 'left'}}><StarRating size={30} set={setOverallRating} name={'OverallRating'}/></div>
          <label className="labelModal">Do You Recommend This Product?</label>
          <div style={{marginTop: '10px', backgroundColor: '#f5f4f2'}}>
            <div className="col-1-2">
              <input type="radio" name="recommend" onClick={() => setRecommend(true)} required/>
              <p>Yes</p>
            </div><aside className="col-1-2">
            <input type="radio" name="recommend" onClick={() => setRecommend(false)} required/>
              <p>No</p>
            </aside>
          </div>
          {props.chars.length > 0 && <ModalRadio set={setChar} name={`${props.chars[0]}Rating`} title={props.chars[0]}/>}
          {props.chars.length > 1 && <ModalRadio set={setChar} name={`${props.chars[1]}Rating`} title={props.chars[1]}/>}
          {props.chars.length > 2 && <ModalRadio set={setChar} name={`${props.chars[2]}Rating`} title={props.chars[2]}/>}
          {props.chars.length > 3 && <ModalRadio set={setChar} name={`${props.chars[3]}Rating`} title={props.chars[3]}/>}
          {props.chars.length > 4 && <ModalRadio set={setChar} name={`${props.chars[4]}Rating`} title={props.chars[4]}/>}
          {props.chars.length > 5 && <ModalRadio set={setChar} name={`${props.chars[5]}Rating`} title={props.chars[5]}/>}

          <label className="labelModal">Add Images by URL</label>
          <div style={{textAlign: 'left'}}><p><a href="https://imgbb.com/" target="_blank">
            You can upload your pictures here and get a URL!</a></p></div>
          {toggleUpload && <div>
            <div className="col-2-3"><input type="text" id="uploadText"
            placeholder="Example: https://i.ibb.co/XWY0Jtr/bgbrain1.png"
            />
            </div><aside className="col-1-3" style={{textAlign: 'left', paddingLeft: '0px'}}>
              <button type="button"className="uploadBtn" onClick={addUpload}>Upload</button>
            </aside>
           </div>}
           <div style={{display: 'flex'}}>
            {uploads.length !== 0 && uploads.map((url, i) =>
              <ImageUpload photo={url} index={i} delete={setUploads} arr={uploads}/>
              )}
           </div>
           <div className="ReviewModalFooter"><button>Submit Review</button></div>

        </form>



      </div></div>}

      {submitMode &&
      <div style={{textAlign: 'center'}}>

        {submitText === 'Submitting...' && <div style={{paddingTop: '250px'}}>
          <h2>{submitText}</h2>
        </div>}

        {submitText === '✓ Your Review Got Posted' && <div className="submitTextPass">
          <h2><span style={{color: 'green'}}>{submitText}</span></h2>
          <button type="button"className="uploadBtn" onClick={() => props.close(false)}>Close</button>
        </div>}

        {submitText === 'X Review Did not Post. Error.' && <div className="submitTextFail">
          <h2><span style={{color: 'red'}}>{submitText}</span></h2>
          <button type="button"className="uploadBtn" onClick={() => props.close(false)}>Close</button>
        </div>}



      </div>}


    </div>
  </div>
)

}




export default ReviewModal;